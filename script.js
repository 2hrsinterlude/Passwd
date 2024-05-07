import { options, toggleOption } from "./src/js/toggleOption.js";
import { PasswordGenerator } from "./src/js/PasswordGenerator.js";

const optionButtons = document.querySelectorAll(".button:nth-last-child(-n+2)");
const generateButton = document.querySelector(".button:nth-child(2)");
const passwordDisplay = document.querySelector(".password");
const lengthInput = document.querySelector(".input");

optionButtons.forEach((element) => {
    toggleOption(element);
});

passwordDisplay.innerHTML = new PasswordGenerator(options).generatePassword(
    lengthInput.value
);

optionButtons.forEach((button) => {
    button.addEventListener("click", (element) => {
        element.currentTarget.classList.toggle("inactive");
        toggleOption(element.currentTarget);
    });
});

generateButton.addEventListener("click", () => {
    passwordDisplay.innerHTML = new PasswordGenerator(options).generatePassword(
        lengthInput.value
    );
});

document.getElementById("grid").addEventListener("click", () => {
    document.querySelector("body").classList.toggle("color-grid");
});
