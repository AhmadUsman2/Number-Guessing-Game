"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberGuessingGame = void 0;
class NumberGuessingGame {
    constructor() {
        this.secretNumber = Math.floor(Math.random() * 100) + 1;
        this.attempts = 0;
    }
    guess(userGuess) {
        this.attempts++;
        if (userGuess < this.secretNumber) {
            return "Too low!";
        }
        else if (userGuess > this.secretNumber) {
            return "Too high!";
        }
        else {
            return `Congratulations! You guessed the number in ${this.attempts} attempts!`;
        }
    }
}
exports.NumberGuessingGame = NumberGuessingGame;
