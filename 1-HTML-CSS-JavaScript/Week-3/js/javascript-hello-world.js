/*Clicking the button will trigger the getName function
first a prompt will pop up asking what is your name
then that answer will be held in a const variable called userName
next the sayHello function will be triggered using the userName variable
finally an alert box will display hello + userName + !. Once finished,
the const will be erased ready to start over  */

// getName function without any parameters
// We want this function to be called first when the page loads
function getName() {
    /* const userName will hold the variable that the user enters
        from the prompt when the page loads*/
    // after the function is done sayHello
    // the const variable will be deleted and ready to start over
    const userName = prompt('What is your name?');
    // sayHello will hold the const variable
    // this is also making a call to the sayHello function
    sayHello(userName);
}
// this function will say Hello to the user 
function sayHello(name) {
    
    alert("Hello " + name + "!");
}