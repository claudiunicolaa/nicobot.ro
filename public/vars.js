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
const helloMessageContent = "Salut! Eu sunt Nicobot și mi-ar plăcea să știu cum mai ești. Cum ți-a fost ziua? Te invit să îmi împărtășești orice gânduri sau sentimente care ți-ar plăcea să le discutăm. Sunt aici pentru a te asculta și a te sprijini în orice mod posibil.";
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
let isWaitingForResponse = false;
