const options = {
    Numbers: null,
    Symbols: null
}

const SetOptions = (element) => {
    const text = element.textContent
    options[text.replace(/\s+/g, '')] = !element.classList.contains('inactive')
    console.log(options)
}

export { SetOptions, options }