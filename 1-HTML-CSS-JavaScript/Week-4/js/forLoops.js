// For loops vs While loops

// For loops are like while loops, but with built-in support for an incrementing iterator

for (let i = 0; i < 5; i++) {
    let i = 0;
    console.log('Loop iteration #', i);
    while (i < 5) {}
    console.log('Loop iteration #', i);
    i += 1
}
// FOR LOOP SYNTAX
// for (initialization; condition; final expression); {
// ...code to execute...
// }

// FOR LOOPS & ARRAYS
// Example:
// This is the ARRAY we'll use and it's going to be global:
const guestArray = ['Jack', 'Aravind', 'Samira', 'Haley', 'Lydia', 'Adrian'];
/* for (create a variable that will be used to iterate through our array and give it the value of 0;
    if the value is less than the length of our array;
    execute the code in the block, then increment by 1 before checking the boolean value of i again;) */
    for (let i = 0; i < guestArray.length; i++) {
        // execute the our message to the console.log;
        // Note: if you do not add the iterator at the end of "guestArray[]" in our example,
        // The console.log will print out all the names at once, instead of one at a time.
        console.log('Welcome to the party ' + guestArray[i] + '!');
    }
    
// FOR OF LOOP
// A for of loop example:
const guestArray = ['Jack', 'Aravind', 'Samira', 'Haley', 'Lydia', 'Adrian'];
// SYNTAX:    
/* for (const/let variableName of arrayName or other iterable)
    ..code to execeute once per each item in the array
     */
    /*
    for (every item of guestArray; give every value of guestArray and save it to a const variable named guest)
     */
    // for (const guest of guestArray) {
        // if you use a let variable you can change the value of guest within the loop block, check out this example:
        for (let guest of guestArray) {
            // Make it all Upper Case
            guest = guest.toUpperCase();
        // print the console message for every item inside of guestArray; while iterating through that array with the const variable guest that was created inside the condition;
        console.log('Welcome to the party ' + guest + '!');
    }
