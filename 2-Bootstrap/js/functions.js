// Functions = Don't Repeat Yourself

let pizzaSize = 'large';
let nToppings = 2;

function getPizzaCost(size, nToppings) { // size, and nToppings (numberOfToppings) are the parameters we'll use to pass data into our getPizzaCost function.
    let cost = 10; // Here, we initialize the cost variable to give it a value of 10.
    if (size === 'medium') { // If the value given for size is strictly-equal to 'medium'
    cost += 4; // four will be added to the total variable of "cost"
        
    } else if (size === 'large') { // If it isn' t medium, but its size is strictly-equal to 'large'?  
        cost += 8; // Add 8 and store it in the variable of "cost"
    }
    cost += nToppings; // Notice how the variable we use here and the one in the parameter list is Different. 
    // Every topping they add, add 1 to what's already stored in the variable "cost"
//     At last, print "The cost of this pizza is: ", $cost(totalValue)
    console.log("The cost of this pizza is: " + cost);
}
getPizzaCost('medium', 12);
getPizzaCost(pizzaSize, nToppings);