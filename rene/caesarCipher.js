// const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

// const args = process.argv.slice(2);
let encodedAlphabet = "";
let result = "";

function shift(n) {
    for (let i = 0; i < ALPHABET.length; i++) {
        let offset = (i + n) % ALPHABET.length;
        encodedAlphabet += ALPHABET[offset];
    }
    console.log(encodedAlphabet);
}

function encode(message) {
    message = message.toLowerCase();
    for (let i = 0; i < message.length; i++) {
        let index = ALPHABET.indexOf(message[i]);
        result += encodedAlphabet[index];
    }
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputs = [];

function getUserInput(n) {
    rl.question('Please input a message and a key: ', (answer) => {
        inputs[n-1] = answer;
        if (n < 2) {
            getUserInput(n+1);
        } else {
            shift(Number(inputs[1]));
            encode(inputs[0]);

            console.log(`Your encoded message is: ${result}`);
            rl.close();
        }
    });
}

getUserInput(1);