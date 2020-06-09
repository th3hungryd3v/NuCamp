// Continue and Break
// These two conditions can be used inside any while or for loop:

// The break statement will immediately exit a loop

// The continue statement will immediately skip to the next iteration of the loop

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

// this will print the number 0 all the way to 4 and then exit the loop

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

// this time the numbers 0 to 4 will be printed out, 5 will be skipped over while continuing to print out numbers 6 to 9, before exiting the loop