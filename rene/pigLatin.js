const CONSONANTS = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
const VOWELS = ["a", "e", "i", "o", "u"];
const args = process.argv.slice(2);

let pigLatin = "";

for (let word of args) {

    let wordArray = word.split('');

    if (VOWELS.includes(wordArray[0].toLowerCase())) {
        pigLatin += " " + word + "way";
    } else {
        if (CONSONANTS.includes(wordArray[1].toLowerCase())) {
            let firstLetter = wordArray.shift();
            let secondLetter = wordArray.shift();
            pigLatin += " " + wordArray.toSpliced(wordArray.length, 0, firstLetter, secondLetter).join('') + "ay";
        } else {
            let firstLetter = wordArray.shift();
            pigLatin += " " + wordArray.toSpliced(wordArray.length, 0, firstLetter).join('') + "ay";
        }
    }
}

console.log(`Output: ${pigLatin.trimStart()}`)