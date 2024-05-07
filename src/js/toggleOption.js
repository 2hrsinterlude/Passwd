const options = {
    Numbers: null,
    Symbols: null,
};

const toggleOption = (element) => {
    const text = element.textContent;
    options[text.replace(/\s+/g, "")] = !element.classList.contains("inactive");
    console.log(options);
};

export { options, toggleOption };
