function runGame() {
    const target = Math.floor(Math.random() * 100) + 1;
    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;
        do {
            guessString = prompt('Guess a number between 1 and 100);
        } while (!correct);
}