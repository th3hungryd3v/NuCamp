// Global constant variables;
const GENERAL_ADMISSION_TICKET_COST = 20;
const CHILD_AND_SENIOR_TICKET_COST = 10;
// New Global Const Variable for a matinee show
const MATINEE_DISCOUNT = 3;

    // This will trigger when the button is clicked
function buyTicket() {
    // A prompt will pop up asking the user what their age is
    // whatever age is entered will be saved into the age variable
    const age = prompt('What is your age?');
    // a cost variable is initialized with the value of GENERAL...
// update variable to call new function
    let cost = getBaseTicketCost(age);
// MOVED to getBaseTicketCost()
    // if the age is less than or equal to 12 OR greater than or equal to 65
    // the answer to this prompt will be saved to this variable = isMatinee
    // .toLowerCase will convert any string to lower-case before it runs through the if statement
    const isMatinee = prompt('Are you attending a matinee show?').toLowerCase();
        // if the answer is strictly equal to yes OR y subtract 3 for the MATINEE...
    cost = applyMatineeDiscount(isMatinee, cost);
        // the cost will be valued at CHILD...
        // cost = CHILD_AND_SENIOR_TICKET_COST;
    
    // An alert will print to the screen letting the user know how much their ticket will cost
    alert('Your ticket will cost: $' + cost);
}

// New function
// This time the function has a parameter(argument)
function getBaseTicketCost(age) {

    if ((age <= 12) || (age >= 65)) {
        // this also has a return statement this time
        // if truthy return CHILD...
        return CHILD_AND_SENIOR_TICKET_COST;

    }
    // Otherwise return GENERAL...
        return GENERAL_ADMISSION_TICKET_COST;
}

function applyMatineeDiscount (isMatinee, cost) {
    // apply discount if  isMatinee is yes OR y
    if ((isMatinee == 'yes') || (isMatinee == 'y')) {
        // subtract 3 if the if statement is truthy
        return cost - MATINEE_DISCOUNT;
    }
    //otherwise return the original cost without applying the discount
    return cost
}