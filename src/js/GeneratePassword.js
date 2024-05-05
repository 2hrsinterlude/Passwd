const STRING_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const STRING_NUMBERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const STRING_SYMBOLS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!"#$%&\'()*+,-./:;=?@[\\]^_`{|}~';
const STRING_NUMBERS_SYMBOLS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&\'()*+,-./:;=?@[\\]^_`{|}~';

// !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'


// const generatePassword = (length = STRING_SYMBOLS.length) => {
//
// }
// generatePasswordN(STRING_NUMBERS);
// generatePasswordS(STRING_SYMBOLS);

const generatePasswordKey = (STRING) => {
    const maxLength = STRING.length;
    return (length) => {
        let result = '';
        for (let i = 0; i < length; i++) {
            // const char = STRING.charCodeAt(i);
            const index = Math.floor(Math.random() * maxLength);
            result += STRING[index];
        }
        return result;
    }
}

export { generatePasswordKey, STRING_ALPHABET, STRING_NUMBERS, STRING_SYMBOLS, STRING_NUMBERS_SYMBOLS };