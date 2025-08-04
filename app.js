import { config } from "dotenv";

config();

const userForm = document.querySelector(".user-form");
const userInput = document.querySelector(".user-input");
const chat = document.querySelector(".chat");

function createMsg(content) {
    const p = document.createElement("p");
    p.innerHTML = content;
    return p;
}

function handleSubmit(e) {
    e.preventDefault();
    const userMsg = userInput.value.trim();
    if (!userMsg) return;

    const userMsgP = createMsg("User : " + userMsg);
    chat.appendChild(userMsgP);

    userInput.value = "";
}

userForm.addEventListener("submit", handleSubmit);