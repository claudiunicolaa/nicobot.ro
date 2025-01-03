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

function isMobileDevice() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
		(navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
}
