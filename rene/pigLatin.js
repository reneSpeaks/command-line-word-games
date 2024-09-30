const CONSONANTS = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
const VOWELS = ["a", "e", "i", "o", "u"];
const args = process.argv.slice(2);

let pigLatin = "";

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

for (let word of args) {

    let wordArray = word.split('');
    let firstLetter;
    let secondLetter;

    if (VOWELS.includes(wordArray[0].toLowerCase())) {
        pigLatin += " " + word + "way";
    } else {
        if (CONSONANTS.includes(wordArray[1].toLowerCase())) {
            firstLetter = wordArray.shift();
            secondLetter = wordArray.shift();

            if (firstLetter === firstLetter.toUpperCase() && wordArray[0] !== undefined) {
                wordArray[0] = capitalizeFirstLetter(wordArray[0]);
            }

            pigLatin += " " + wordArray.toSpliced(wordArray.length, 0, firstLetter.toLowerCase(), secondLetter).join('') + "ay";
        } else {
            firstLetter = wordArray.shift();

            if (firstLetter === firstLetter.toUpperCase() && wordArray[0] !== undefined) {
                wordArray[0] = capitalizeFirstLetter(wordArray[0]);
            }

            pigLatin += " " + wordArray.toSpliced(wordArray.length, 0, firstLetter.toLowerCase()).join('') + "ay";
        }
    }
}

console.log(`# Output: ${pigLatin.trimStart()}`)