// MORE ABOUT STRINGS

// Strings are iterables, like arrays - they can be iterated over
// Even though each string is considered to be a single value, it can also be broken down into a set of characters.
// Although a string is not an array, in many ways, JavaScript will treat a string similar to an array of characters.

// That means many of the things you can do with arrays, can also be done to strings

// STRINGS: FOR ... OF
const myString = 'abcdefg';
for (const x of myString) {
    console.log(x); /* Output: a
                               b
                               c
                               d
                               e
                               f
                               g */
}

// STRINGS: INDEX & LENGTH
// You can use bracket notation to access each character in a string
// Example: myString[0]; Output: 'a'
// You can't use bracket notation to change/delete a character in a string
// You can use the length method on strings to get the number of characters in a string
// You can find the last character in a string using: myString[myString.length-1]

// STRING METHODS
// indexOf() - find the index of a character in a string; returns the index of a character if it exists in a string
// includes() - find out if a character exists within a string; returns a boolean value, depending on whether or not the character exists in the string
// slice() - cut out characters and create a new string; depending on how many parameters you enter: 2 will start from the first parameter and stop before the second parameter: 1 will start from the first parameter and continue all the way to the end of the string

// EXCLUSIVE TO STRINGS 
// toLowerCase() - convert the string to ALL lower-case letters; returns the string in lower-case
// toUpperCase() - convert the string to ALL upper-case letters; returns the string in upper-case

// SPLIT()
// The split() method converts a string to an array, providing as an argument a separator to determine where to split the string, such as a space or a comma
// Example:
const aString = 'little red balloon';
aString.split(' '); // Output: (3) ["little", "red", "balloon"]
// aString.split(','); Output: ["little red balloon"]
