function openFileExplorer() {

    var input = document.createElement("input");
    input.type = "file";

    input.click();
}



const chatInput = document.querySelector(".type-message input");
const sendChatBtn = document.querySelector(".send");
const chatbox = document.querySelector(".chatbox");

let userMessage;
const API_KEY = "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";

const createChatLi = (message, className) => {
    // create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="bot-image"><img src="/assets/bot.png" alt=""></span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
}

const handleChat = () => {
    userMessage = chatInput.value.trim();

    if(!userMessage) return;

    // append user's message to chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatInput.value = ""; 
}

sendChatBtn.addEventListener("click", handleChat);