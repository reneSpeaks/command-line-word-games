const args = process.argv.slice(2);

if (args.length !== 2) {
    console.error('Please provide exactly two numbers.');
    return;
}

const firstNumber = parseFloat(args[0]);
const secondNumber = parseFloat(args[1]);

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    console.error('Both arguments must be numbers.');
    return;
}

const sum = firstNumber + secondNumber;

console.log(`The sum of ${firstNumber} and ${secondNumber} is ${sum}`);
return;