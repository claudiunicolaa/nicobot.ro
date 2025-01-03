window.onload = setInitialState;
// Initial render
renderMessages();


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

async function widgetState(isOpen) {
	chatbot.style.display = isOpen ? 'flex' : 'none';
	chatToggle.textContent = isOpen ? '×' : '💬';
	chatToggle.classList.toggle('open', isOpen);
	chatToggle.classList.toggle('closed', !isOpen);
}

function setInputState(disabled) {
	chatInput.disabled = disabled;
	sendButton.disabled = disabled;
}

