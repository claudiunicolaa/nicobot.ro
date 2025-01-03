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

function messageHasOptions(message) {
	return message.sender === 'bot' && message.options && message.options.length > 0;
}