const checkbox = document.getElementById("checkBox");
const head = document.getElementById("head");
const modes = document.getElementById("modes");

const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");

const languageBtn = document.getElementById("language-btn");

const buttons = document.getElementById("buttons");

function darkMode() {
    if (checkbox.checked) {
        document.body.style.backgroundColor="#28282B";
        // head
        head.style.backgroundColor="#28282B";
        head.querySelector("p").style.color="white";
        head.querySelector("i").style.color="white";
        modes.style.backgroundColor="#28282B";
        // circle
        circle1.querySelector("p").style.color="white";
        circle2.querySelector("p").style.color="white";
        // language-btn
        languageBtn.style.borderColor="white";
        languageBtn.style.backgroundColor="#28282B";
        languageBtn.querySelector("p").style.color="white";
        languageBtn.querySelector("i").style.color="white";
        // buttons div
        buttons.style.backgroundColor="#28282B";

    } else {
        document.body.style.backgroundColor="white";
        // head
        head.style.backgroundColor="#fcce22";
        head.querySelector("p").style.color="#323660";
        head.querySelector("i").style.color="#323660";
        modes.style.backgroundColor="white";
        // circle
        circle1.querySelector("p").style.color="#323660";
        circle2.querySelector("p").style.color="#323660";
        // language-btn
        languageBtn.style.borderColor="#323660";
        languageBtn.style.backgroundColor="white";
        languageBtn.querySelector("p").style.color="#323660";
        languageBtn.querySelector("i").style.color="#323660";
        // buttons div
        buttons.style.backgroundColor="white";
    }
}

const confirmLogout = document.getElementById("confirm-logout");
const container = document.getElementById("container");

function toggleS() {
    confirmLogout.style.display="flex";
    container.style.opacity="0.2";
}

function toggleH() {
    confirmLogout.style.display="none";
    container.style.opacity="1";
}

