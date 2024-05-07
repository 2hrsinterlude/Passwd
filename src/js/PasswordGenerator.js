const STRING_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const STRING_NUMBERS =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const STRING_SYMBOLS =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!\"#$%&'()*+,-./:;=?@[\\]^_`{|}~";
const STRING_NUMBERS_SYMBOLS =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'()*+,-./:;=?@[\\]^_`{|}~";

class PasswordGenerator {
    constructor(options) {
        this.options = options;
    }

    generatePassword(length) {
        let charSet = STRING_ALPHABET;

        if (!Number.isFinite(parseInt(length))) length = 24;
        if (length >= 100) length = 100;

        if (this.options.Numbers && this.options.Symbols) {
            charSet = STRING_NUMBERS_SYMBOLS;
        } else if (this.options.Numbers) {
            charSet = STRING_NUMBERS;
        } else if (this.options.Symbols) {
            charSet = STRING_SYMBOLS;
        }

        let result = "";
        const maxLength = charSet.length;

        for (let i = 0; i < length; i++) {
            const index = Math.floor(Math.random() * maxLength);
            result += charSet[index];
        }

        return result;
    }
}

export { PasswordGenerator };
