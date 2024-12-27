const chatToggle = document.getElementById('chatToggle');
const startChatButton = document.getElementById('startChatButton');
const minimizeButton = document.getElementById('minimizeButton');

const chatbotContainer = document.getElementById('chatbotContainer');
const chatbot = document.getElementById('chatbot');
const chatMessages = document.getElementById('chatMessages');

const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const sendButton = document.querySelector('.chatbot-send');


const baseUrl = "https://vorbarie.ro";
const helloMessageContent = "Salut! Eu sunt Nicobot și mi-ar plăcea să știu cum mai ești. Cum ți-a fost ziua?";
const durationMessage = {
	content: "Uneori răspunsul unui mesaj poate sa dureze chiar și 5-10 secunde. Mulțumim pentru răbdare.",
	sender: 'system',
}
let isOpen = false;
let messages = [

	{
		id: 1,
		content: 'Nicobot este un asistent digital antrenat pentru a-ți oferi sfaturi validate științific pentru îmbunătățirea stării de bine.',
		sender: 'system'
	},
	{
		id: 2,
		content: helloMessageContent,
		sender: 'bot',
		options: []
	},
];
let chatId = null;
let isFirstUserMessage = true;

window.onload = setInitialState;
// Initial render
renderMessages();


chatForm.onsubmit = (e) => {
	e.preventDefault();
	const inputValue = chatInput.value.trim();
	if (inputValue && !sendButton.disabled) {
		handleSend(inputValue);
	}
};

chatToggle.onclick = () => {
	isOpen = !isOpen;
	widgetState(isOpen);
};

startChatButton.onclick = () => {
	isOpen = true;
	widgetState(isOpen);
};

minimizeButton.onclick = () => {
	isOpen = false;
	widgetState(isOpen);
};

chatInput.addEventListener('focus', () => {
	setTimeout(() => {
		chatMessages.scrollTop = chatMessages.scrollHeight;
	}, 300);
});

chatInput.addEventListener('keypress', function (e) {
	if (e.key === 'Enter') {
		if (!e.shiftKey) {
			e.preventDefault(); // prevent default 'Enter' behavior
			chatForm.dispatchEvent(new Event('submit')); // submit the form
		}
	}
});

if (isMobileDevice()) {
	sendButton.classList.add('mobile-hide');

	// Add event listener for 'enter' key on mobile
	chatInput.addEventListener('keypress', function (e) {
		if (e.key === 'Enter') {
			e.preventDefault(); // Prevent default 'Enter' behavior
			document.getElementById('chatForm').dispatchEvent(new Event('submit'));
		}
	});
}

// Call setInitialState when the page loads
async function setInitialState() {
	setInputState(true);
	try {
		const response = await makeAPIRequest('health', 'GET', null);
		if (response?.status !== 'OK') {
			throw new Error('Health check failed');
		}
	} catch (error) {
		console.error('Error starting chat:', error);
	} finally {
		setInputState(false);
		// mimic loading time
		setTimeout(() => {
			widgetState(isOpen);
		}, 300);
	}
}

async function renderOptions(message, messageDiv) {
	const optionsDiv = document.createElement('div');
	optionsDiv.className = 'response-options';

	message.options.forEach(option => {
		const button = document.createElement('button');
		button.className = 'response-option';
		button.textContent = option;
		button.onclick = () => handleOptionClick(option, message.id);
		if (message.selectedOption && message.selectedOption === option) {
			button.classList.add('selected');
		}
		optionsDiv.appendChild(button);
	});

	messageDiv.appendChild(optionsDiv);
}

async function renderMessages() {
	messages.forEach(message => {
		let messageDiv = document.getElementById(`message-${message.id}`);
		if (!messageDiv) {
			messageDiv = document.createElement('div');
			messageDiv.id = `message-${message.id}`;
			messageDiv.className = `message message-${message.sender}`;
			const span = document.createElement('span');
			span.innerHTML = marked.parse(message.content);
			messageDiv.appendChild(span);

			if (messageHasOptions(message)) {
				renderOptions(message, messageDiv);
				setInputState(true);
			} else {
				setInputState(false);
			}

			chatMessages.appendChild(messageDiv);
		} else {
			// update existing message if needed
			const span = messageDiv.querySelector('span');
			span.innerHTML = marked.parse(message.content);
			if (messageHasOptions(message)) {
				const optionsDiv = messageDiv.querySelector('.response-options');
				if (optionsDiv) {
					optionsDiv.remove();
				}
				renderOptions(message, messageDiv);
				setInputState(true);
			} else {
				setInputState(false);
			}
		}
	});

	chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function handleLoad(id) {
	messages = [];
	try {
		const response = await makeAPIRequest('get-conversation-by-id', 'POST', id);
		chatId = id;
		response.messages.forEach((elem, index) => {
			if (elem.sender == 'initial_message') {
				elem.sender = 'bot';
			}
			elem.id = index;
			messages.push(elem);
		});
		// clear chatMessages box
		chatMessages.innerHTML = '';
	} catch (error) {
		console.error('Error getting bot response:', error);
		messages.push({
			id: Date.now(),
			content: 'Sunt încă în dezvoltare și uneori mai întâmpin erori. Reîncercați mai târziu.',
			sender: 'bot'
		});
	} finally {
		renderMessages();
	}
}

function createLoadingMessage() {
	const loadingDiv = document.createElement('div');
	loadingDiv.className = 'message-bot';
	loadingDiv.innerHTML = '<div class="loading-dots"></div>';
	return loadingDiv;
}

let isWaitingForResponse = false;
async function handleSend(messageContent, messageId) {
	if (isWaitingForResponse) return;

	setInputState(false);
	isWaitingForResponse = true;

	if (messageId) {
		messages = messages.map(msg =>
			msg.id === messageId ? { ...msg, selectedOption: messageContent } : msg
		);
	}

	const newUserMessage = {
		id: Date.now(),
		content: messageContent,
		sender: 'user',
	};
	messages.push(newUserMessage);

	if (isFirstUserMessage) {
		messages.push(durationMessage);
		isFirstUserMessage = false;
	}
	renderMessages();
	chatInput.value = '';

	// add loading animation
	const loadingDiv = createLoadingMessage();
	chatMessages.appendChild(loadingDiv);
	chatMessages.scrollTop = chatMessages.scrollHeight;

	try {
		// chatId not set yet means we need to start a new chat; it is the first message
		if (!chatId) {
			const response = await makeAPIRequest('start-chat', 'GET', null);
			chatId = response?.chat_id;
			if (!chatId) {
				throw new Error('No chat ID received');
			}
		}
		newUserMessage.chatId = chatId;
		const response = await makeAPIRequest('get-bot-response', 'POST', newUserMessage);
		messages.push(response);
	} catch (error) {
		console.error('Error getting bot response:', error);
		messages.push({
			id: Date.now(),
			content: 'Sunt încă în dezvoltare și uneori mai întâmpin erori. Reîncercați mai târziu.',
			sender: 'bot'
		});
	} finally {
		setInputState(true);
		isWaitingForResponse = false;
		// remove loading animation
		chatMessages.removeChild(loadingDiv);
		renderMessages();
		// focus on chat input
		chatInput.focus();
	}
}

async function handleOptionClick(option, messageId) {
	if (!messages.find(msg => msg.id === messageId).selectedOption) {
		handleSend(option, messageId);
	}
}

async function widgetState(isOpen) {
	chatbot.style.display = isOpen ? 'flex' : 'none';
	chatToggle.textContent = isOpen ? '×' : '💬';
	chatToggle.classList.toggle('open', isOpen);
	chatToggle.classList.toggle('closed', !isOpen);
}

function showNotification(message) {
	messages.push({
		id: Date.now(),
		content: message,
		sender: 'system'
	});
	renderMessages();

	setTimeout(() => {
		notification.classList.remove('show');
	}, 3000); // Hide after 3 seconds
}

function isMobileDevice() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
		(navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
}

function messageHasOptions(message) {
	return message.sender === 'bot' && message.options && message.options.length > 0;
}

function setInputState(disabled) {
	chatInput.disabled = disabled;
	sendButton.disabled = disabled;
}

// CALL API WRAPPERS

// return bot response as a message object
async function makeAPIRequest(endpoint, method, body) {
	const headers = {
		'Content-Type': 'application/json',
		'X-Assistant-Type': 'clinica-demo',
	};
	try {
		const options = {
			method: method,
			headers: headers,
		};

		if (body) {
			options.body = JSON.stringify(body);
		}

		const response = await fetch(baseUrl + "/" + endpoint, options);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('API request error:', error);
		throw error;
	}
}
