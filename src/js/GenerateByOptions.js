import {options} from "./SetOptions.js";
import {generatePasswordKey, STRING_ALPHABET, STRING_NUMBERS, STRING_SYMBOLS, STRING_NUMBERS_SYMBOLS} from "./GeneratePassword.js";

const GenerateByOptions = (main, length) => {

    if (!Number.isFinite(parseInt(length))) length = 24
    if (length >= 100) length = 100

    switch ((options.Numbers && options.Symbols) !== null) {


        case options.Numbers === true && options.Symbols === false:

            const generatePasswordN = generatePasswordKey(STRING_NUMBERS)
            const passN = generatePasswordN(length)

            main.innerHTML = passN;

            console.log(passN)
            console.log('Alpha + Numbers')
            break


        case options.Numbers === false && options.Symbols === true:

            const generatePasswordS = generatePasswordKey(STRING_SYMBOLS)
            const passS = generatePasswordS(length)

            main.innerHTML = passS;

            console.log(passS)
            console.log('Alpha + Symbols')
            break


        case options.Numbers === true && options.Symbols === true:

            const generatePasswordNS = generatePasswordKey(STRING_NUMBERS_SYMBOLS)
            const passNS = generatePasswordNS(length)

            main.innerHTML = passNS;

            console.log(passNS)
            console.log('Alpha + Numbers + Symbols')
            break


        case options.Numbers === false && options.Symbols === false:

            const generatePasswordA = generatePasswordKey(STRING_ALPHABET)
            const passA = generatePasswordA(length)

            main.innerHTML = passA;

            console.log(passA)
            console.log('Alpha')
            break
    }
}

export { GenerateByOptions };