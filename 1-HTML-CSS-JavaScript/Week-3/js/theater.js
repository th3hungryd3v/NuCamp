// Global constant variables;
const GENERAL_ADMISSION_TICKET_COST = 20;
const CHILD_AND_SENIOR_TICKET_COST = 10;

// This will trigger when the button is clicked
function buyTicket() {
    // A prompt will pop up asking the user what their age is
    // whatever age is entered will be saved into the age variable
    const age = prompt('What is your age?');
    // a cost variable is initialized with the value of GENERAL...
    let cost = GENERAL_ADMISSION_TICKET_COST;
    // if the age is less than or equal to 12 OR greater than or equal to 65
    if ((age <= 12) || (age >= 65)) {
        // the cost will be valued at CHILD...
        cost = CHILD_AND_SENIOR_TICKET_COST;
    }
    // An alert will print to the screen letting the user know how much their ticket will cost
    alert('Your ticket will cost: $' + cost);
}