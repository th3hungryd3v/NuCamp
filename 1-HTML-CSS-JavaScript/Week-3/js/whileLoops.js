// Loops are a way to repeat a block of code

// While loops evaluate a condition that you set
// As long as the condition evaluates as true, it will continue to loop
// At every iteration, the condition will be re-evaluated

// Syntax:
/* while(condition to be evaluated) {
    ...code to run while the condition evaluates to true...
} */
// Something must happen inside the while loop to cause the condition to be evaluated as false,
// Otherwise, there would be no way to exit the loop

// Example:
let i = 0; // create a variable and give it the value of 0
    while(i < 5) { // while (i is less than 5)
        i +=1; // add 1 to the value of i
        console.log('This is iteration # ' + i); // print this string to the console every time the loop runs and add the current value of i at the end
    }
// Output in console
/* 
This is iteration # 1
This is iteration # 2
This is iteration # 3
This is iteration # 4
This is iteration # 5
*/

// DO ... While loop syntax
/*
do {
    ...code to first run once, then loop while the condition
        evaluates as true...
} while (condition to be evaluated);
*/

// with the while loop, the condition is evaluated first, so if the condition
// is false in the beginning, the code inside the block never executes

// with the do...while loop, the loop block executes once before evaluating the condition -
// so even if the condition is false, the code inside the block will always execute at least once

// Example:
let i = 5; // i is initialized with the value of 5
while (i < 5) { // while (i is less than 5)
    i += 1; // add the value of 1 for every iteration of i
    console.log('This is iteration # ' + i); // print to console
}
// This code will never run because i is not less than 5 but,
do {
    i += 1; // add the value of 1 to i for every iteration
    console.log('This is iteration # ' + i); //print to console
} while (i < 5); // while (i is less than 5)

//OUTPUT:
// This is iteration # 6
// The code block will always run at least once before reaching the while condition

// Another Example:

let answer = ''; // set up a variable named answer and initialize it to an empty string
do {
    answer = prompt('Do you like chocolates?'); // the answer to the prompt will be the value for the answer variable
} while (answer !== 'yes'); // evaluate as true if the answer is anything other than yes, so that means if the answer is yes, this condition is evaluated to false and the loop will stop
// but if the answer is anything other than yes, the condition will evaluate to true, so the while loop will keep repeating the prompt