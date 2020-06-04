// What is scope
// Scope is the context, region of code, in which a variable exists and can be accessed

// JavaScript has LEXICAL SCOPE - scope of a variable depends where it was declared

// 2 basic types of scope - GLOBAL && LOCAL -
// Local Scope includes BLOCK SCOPE && FUNCTION SCOPE

// Variables declared using LET && CONST possess BLOCK SCOPE
// Meaning: They are only accessible within the code block in which they were declared, as well as any child blocks of that code block

// Code Block: Any set of statements typically contained within curly braces can be considered a code block 

// Example: If a variable is declared inside a code block
if (true) {
    let testVar = 1;
}
// then you try to access the variable from outside of the code block 
console.log(testVar);
// you'll receive an error stating that the variable is not defined 
// ** by the way UNDEFINED is a valid JavaScript datatype that says that a variable was declared but
// its value has not been initalized
// NOT DEFINED means a variable was not declared at all - which is what we're seeing here because 
// we're trying to access the variable outside of the block within which it was declared
// When that if block ended the variable testVar was deleted and does not exist anymore
// Scope is inherited from the parent block to the child block - So if you try something like this

if (true) {
    let testVar =1;
    // nest another if statement inside
    if (true) {
        // this inner child block is able to access the value of testVar that was set outside of it because
        // it's declared in its parent block
        console.log(testVar);
    }
}

// The opposite would not work
// If you try to declare a variable in the child block:

if(true) {
    if(true) {
        let testVar = 1;
    }
    console.log(testVar); // the parent block cannot see it
}

// It's possible to declare variables with the same name in different code blocks
if (true) {
    let testVar = 1;
    if (true) {
        let testVar = 2;
        // this child block no longer uses the testVar variable of the parent block
        // it has its own seperate variable with the same name
        console.log('In the child block, testVar is ', testVar);
    }
    console.log('In the parent block, testVar is ', testVar);
} // the output from this should show that they are indeed two seperate variables with different values

// GLOBAL SCOPE
// Variables that are declared outside of any code block have GLOBAL SCOPE - They are available EVERYWHERE
// Best Practice: Declare variables where they will be used with local scope
// Avoid using global scope for most variables because they can lead to confusion and bugs from globals being modified
// Hard-coded Constants that will not be assigned dynamically, and will be used in multiple places within the code, are often set as globals

// FUNCTION SCOPE
// Local-Scope - Similar to block scope but only applies to function blocks
// Block scope is used by variables declared with let and const keywords
// Function Scope is used by variables declared with pre-ES6 var keyword

// Examples:
// If you declare a var variable inside an if block
if (true) {
    var testVar = 1;
}
// console:
console.log(testVar);
// it's available outside of the if block

// inside a function block
function testFn() {
    var testVar = 2;
}
//console:
console.log(testVar);
// it's not available

// the let and const keywords for variables is considered to be an improvement over function scope
// and that is one of the reasons that let and const are recommended over var