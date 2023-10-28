import * as readlineSync from 'readline-sync';
import { NumberGuessingGame } from './game';

let playAgain = true;

while (playAgain) {
    const game = new NumberGuessingGame();

    console.log('Welcome to the Number Guessing Game!');

    while (true) {
        const userGuess = parseInt(readlineSync.question('Make a guess (between 1 and 100): '));
        const result = game.guess(userGuess);
        console.log(result);

        if (result.includes("Congratulations")) {
            break;
        }
    }

    const playAgainInput = readlineSync.question('Do you want to play again? (yes/no): ');

    if (playAgainInput.toLowerCase() !== 'yes') {
        playAgain = false;
    }
}
