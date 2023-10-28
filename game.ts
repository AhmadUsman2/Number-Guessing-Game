export class NumberGuessingGame {
    private secretNumber: number;
    private attempts: number;

    constructor() {
        this.secretNumber = Math.floor(Math.random() * 100) + 1;
        this.attempts = 0;
    }

    guess(userGuess: number): string {
        this.attempts++;

        if (userGuess < this.secretNumber) {
            return "Too low!";
        } else if (userGuess > this.secretNumber) {
            return "Too high!";
        } else {
            return `Congratulations! You guessed the number in ${this.attempts} attempts!`;
        }
    }
}


