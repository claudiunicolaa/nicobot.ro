
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
