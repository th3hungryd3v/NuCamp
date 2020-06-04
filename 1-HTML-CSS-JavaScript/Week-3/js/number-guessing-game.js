function runGame() {
    // This will take the return value from the prompt: input received from the prompt is always returned as a string: this has been initalized as an empty string
    let guessString = '';
    // This is where we'll store the guessString after it's been converted to a number: this has been initialized to 0;
    let guessNumber = 0;
    // this variable will hold a boolean value to check if the answer is true or not: this will also exit the loop when the user's guess is correct (true)
    let correct = false;
    // this records how many tries it took before they guessed the correct number
    let numTries = 0;
    
    // CREATE RANDOM NUMBER BETWEEN 1 - 100 AND STORE IT IN A VARIABLE
    // this will create random numbers from 0 - 99.9999999
    const randomNumber = Math.random() * 100;
    // this takes the return value randomNumber (0 - 99.9999999) and converts it to a whole number (0 - 99)
    const randomInteger = Math.floor(randomNumber);
    // this takes the return value of randomInteger and our range is between 1 - 100 (previously 0 - 99)
    const target = randomInteger + 1;


    // shorthand: const target = Math.floor(Math.random() * 100) + 1;
    // GET GUESS FROM PLAYER & STORE IT IN A VARIABLE
        do {
            guessString = prompt("I'm thinking of a number in the range of 1 - 100.\n\nWhat is the number?");
            // this is where the conversion from string to number takes place
            // this takes the return value from the prompt guessString converts it to a number and saves that number in guessNumber
            guessNumber = +guessString;
            // this function will check the correct value from the checkGuess() function below
            correct = checkGuess(guessNumber, target);
        // this will keep repeating the loop as long as the answer is false (!correct)
        // this is waiting for correct to be true; once the player guesses the right number, the return value from the checkGuess() function
        // will change the !correct to correct and the loop exits and the game ends.
        } while (!correct);
}
// CHECK THE PLAYER'S GUESS
// this will receive values from the local variables from the rungame() function where it is called
function checkGuess(guessNumber, target) {
    // this will be used later as the return value from this function: checkGuess
    let correct = false;
// GUESS NOT A NUMBER?
    // this will return true if the input is Not a Number (NaN)
    if (isNaN(guessNumber)) {
        // if true alert the player to enter a number
        alert('You have not entered a number.\n\nPlease enter a number between the range of 1 - 100!')
    // if the input was a number, is it within range?
    } else if ((guessNumber < 1) || (guessNumber > 100)) {
        // if not alert the player to guess within range of 1 - 100
        alert('Please enter an integer within the 1 - 100 range.');
        // if it was within range, is it higher than the correct guess?
        // if it is alert the player their guess is too large
    } else if (guessNumber > target) {
        alert('Your number is too large!');
        // if not, check if the player's guess is too low
        // if it is alert the player their guess is too small
    } else if (guessNumber < target) {
        alert('Your number is too small!');
        // at this point the player has guessed the correct number, so correct is now true which will exit the loop block
    } else {
        correct = true;
    }
    // this value will go back to the runGame() function where the checkGuess() function was called as the return value from checkGuess() 
    // and it will be set as the value for the variable named correct
    return correct;
}