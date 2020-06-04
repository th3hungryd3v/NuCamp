// Math is a built-in global object in JavaScript that we can use to access certain math-related functions,
// which are called methods of the Math global object

// Math.random()
// This method generates a random number between 0 and 1
// It does not take an argument
// The potential value of this number includes 0 but not 1
// To reiterate: this method generates a number between 0 and 1, including 0 but not including 1

// To generate a number between 0 and a number higher than 1, multiply the random number
// Generate a number between 0 - 6, but not including 6:
// let randomNumber = Math.random() * 6
// The highest possible value for this random number would be 5.9999999999...but never reaching 6

// Math.floor()
// This method removes all digits to the right of the decimal point from a number
// You input the number you want to "floor" as an argument:
// const anInteger = Math.floor(3.14); - anInteger 3

// You can use Math.floor() & Math.random() together like this:
// const randomInteger = Math.floor(Math.random() * 6);
// The value of randomInteger could potentially be 0,1,2,3,4,5 - but not 6
// If you want a random number between 1 and 6 rather than 0 - 5, add 1 to the result:
// const randomInteger = Math.floor(Math.random() * 6) + 1;