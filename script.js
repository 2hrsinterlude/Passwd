import { SetOptions, options } from "./src/js/SetOptions.js";
import { GenerateByOptions } from "./src/js/GenerateByOptions.js";

const options_button = document.querySelectorAll('.button:nth-last-child(-n+2)')
const generate_button = document.querySelector('.button:nth-child(2)')
const main = document.querySelector('.password');
const length_input = document.querySelector('.input');

window.onload = function() {
    localStorage.removeItem('inputValue');
}

console.log(length_input)


options_button.forEach(element => {
    SetOptions(element)
})

GenerateByOptions(main)

options_button.forEach((button) => {
    button.addEventListener('click', (element) => {
        element.currentTarget.classList.toggle('inactive');
        SetOptions(element.currentTarget)

    })
})

generate_button.addEventListener('click', () => {
    GenerateByOptions(main, length_input.value)
    console.log(length_input.value)
    console.log(length_input.placeholder)
})

document.getElementById('grid').addEventListener('click', () => {
    console.log(document.querySelector('body'))
    document.querySelector('body').classList.toggle('color-grid')
})