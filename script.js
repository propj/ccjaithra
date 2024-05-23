let conversation = document.getElementById('conversation');
let userInput = document.getElementById('userInput');

function sendMessage() {
    let userMessage = userInput.value;
    if (userMessage.trim() !== "") {
        appendMessage('You', userMessage);
        getResponse(userMessage);
        userInput.value = "";
    }
}

function appendMessage(sender, message) {
    let p = document.createElement('p');
    p.textContent = `${sender}: ${message}`;
    conversation.appendChild(p);
    conversation.scrollTop = conversation.scrollHeight;
}

function getResponse(message) {
    let response = "";
    if (message.toLowerCase().includes('name')) {
        response = "Nice to meet you! What's your favorite hobby?";
    } else if (message.toLowerCase().includes('hobby')) {
        response = "That sounds fun! What's your favorite type of music?";
    } else {
        response = "That's interesting! Tell me more!";
    }
    setTimeout(() => appendMessage('Girlfriend', response), 1000);
}
