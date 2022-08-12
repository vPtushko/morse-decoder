const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};
function decode(expr) {

    const length = 10;
    const pattern = new RegExp(".{1," + length + "}", "ig");
    let arr = expr.match(pattern).map(item => item.padEnd(length, "."));
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '**********') {
            newArr.push(' ')
        } else {
            let rep = arr[i].replace(/^0+/g, '').replace(/10/g, '.').replace(/11/g, '-')
            newArr.push(MORSE_TABLE[rep])
        }
    }
    return newArr.join('')
}
module.exports = {
    decode
}