const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let str = '';
  let space = /00/g;
  let dot = /10/g;
  let dush = /11/g;
  let letter = expr.replace(dush, '-').replace(dot, '.').replace(space, '2');
  let mass = letter.match(/.{5}/g).map(el => el.replace(/2/g, ''));
  for (let i = 0; i < mass.length; i++) {
    mass[i] == '*****' ? str += ' ' : str += MORSE_TABLE[mass[i]];
  }
  return str.replace(/\s{2}/g, ' ');
}

module.exports = {
    decode
}
