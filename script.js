
function sendMessage() {
    const userInput = document.getElementById("userInput");
    if (userInput.value.trim() === "") return;
    
    // Add user message
    addMessage(userInput.value, "user");
    
    // Generate bot reply
    const botReply = getBotReply(userInput.value);
    setTimeout(() => addMessage(botReply, "bot"), 600);
    
    userInput.value = "";
    }
    
    function addMessage(text, sender) {
    const chatBox = document.getElementById("chatBox");
    const message = document.createElement("div");
    message.className = `message ${sender}`;
    message.textContent = text;
    chatBox.appendChild(message);
    
    // Auto-scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
    }
    
    function getBotReply(input) {
    input = input.toLowerCase().trim();
    
    // Smarter bot responses
    if (/\b(hello|hi|hey)\b/.test(input)) return "Hello! How can I help you today?";
    if (/\b(name)\b/.test(input)) return "I'm your friendly chatbot!";
    if (/\b(how are you)\b/.test(input)) return "I'm a bot, but I'm doing great!";
    if (/\b(time)\b/.test(input)) return `Current time is ${new Date().toLocaleTimeString()}`;
    if (/\b(bye|goodbye)\b/.test(input)) return "Goodbye! Have a great day!";
    
    return "I didn't quite catch that. Can you try again?";
    }
    
