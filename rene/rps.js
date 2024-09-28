// Rock Paper Scissors Game Preparations
const CHOICES = ['Rock', 'Paper', 'Scissors'];
const INTRO = `Playing Rock, Paper, Scissors is easy! Just choose one! `;

// Initialize a User Interface
const readline = require("node:readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// returns a random choice for the game.
function randomRPS() {
    return CHOICES[Math.floor(Math.random() * 3)];
}

// checks for the winner of the game.
function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return null;
    } else if (playerChoice.toLowerCase() === CHOICES[0].toLowerCase() && computerChoice.toLowerCase() === CHOICES[2].toLowerCase()) {
        return "Player";
    } else if (playerChoice.toLowerCase() === CHOICES[1].toLowerCase() && computerChoice.toLowerCase() === CHOICES[0].toLowerCase()) {
        return "Player";
    } else if (playerChoice.toLowerCase() === CHOICES[2].toLowerCase() && computerChoice.toLowerCase() === CHOICES[1].toLowerCase()) {
        return "Player";
    } else {
        return "Computer";
    }
}

// Playing Loop
let playing = true;
do {
    rl.question(`${INTRO}`, input => {

        let playerChoice = input.trim();

        // INPUT VALIDATION
        if (playerChoice.toLowerCase() !== CHOICES[0].toLowerCase() &&
            playerChoice.toLowerCase() !== CHOICES[1].toLowerCase() &&
            playerChoice.toLowerCase() !== CHOICES[2].toLowerCase()) {

            console.error(`Please make sure your input is correct. (Rock, Paper, Scissors)`);
        } else {
            let computerChoice = randomRPS();
            console.log(`You chose: ${playerChoice}!`);
            console.log(`The computer chose: ${computerChoice}`);

            let winner = checkWinner(playerChoice, computerChoice);

            if (winner !== null) {
                console.log(`${winner} WINS!`)
            } else {
                console.log(`Go Again!`);
            }
        }

        rl.close();
    });

    playing = false;
} while (playing);