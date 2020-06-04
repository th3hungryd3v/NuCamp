// What are Arrays?
// Creating an Array
// Accessing Array items
// Modifying Array items
// Array property: length
// Array Methods: pop(), push(), shift(), unshift(), join(), includes(), indexOf()

// Arrays are numerically indexed collections of values
// Arrays can contain strings, numbers, Booleans, even other Arrays
// Each item in an Array is associated with a number based on its order of appearance in the array, starting with 0

// Creating an Array
// To create an Array using the Array Literal Syntax:
// [item1,item2,item3,...] = your objects go inside the square brackets seperated by commas
// To use an Array more than once, store the Array literal in a variable:
// const groceryList = ['eggs','coffee beans','salad'];
// let luckyNumbers = [7,23,99,11,777];
// You can also mix variables up like so:
// let anArray = [7,'eggs',99,'salad',true];

// Accessing Array Items
// Arrays are zero-indexed: an Array's index starts at 0
// const groceryList = ['eggs','coffee beans','salad'];
//           Array Item |'eggs'|'coffe beans'|'salad'|         
//           Array Index|  0   |      1      |   2   |

// Using bracket notation you can access the objects/items in an Array:
// variableName immediately followed by [] with the index number inside of it
// groceryList[0] ==> 'eggs'
// groceryList[1] ==> 'coffee beans'
// groceryList[2] ==> 'salad'

// Modifying Array Items
// If you know the index for the item you would like to replace, you can do so like this:
// groceryList[0] = 'bananas';
// groceryList[2] = 'soap';
// the new Array would now look like this:
// const groceryList = ['bananas','coffee beans','soap'];

// Array Property: Length
// All Arrays have a length property: A count of the total number of items inside the array
// arrayName.length
//Example:
//groceryList.length
// Output: 3
// This is the total count of all items, which starts at 1 | The Array index starts at 0!
// Though the length of this array is 3, the index is 0 through 2
// To figure out the last item in an Array try using: groceryList[groceryList.length-1]
// This should print 'soap' to the console which is the last item in the array

// Array Methods
// All Arrays can access a large number of built-in JavaScript array functions, called Array Methods
// arrayName.methodName()
// Some of the methods have parameters and some don't
// Most Array Methods return a value
// Some of the methods are mutators - they mutate (change the value of) the Array;
// Others are not, it's important to know which are which

// pop() && push()
// pop() removes an item from the end of an Array and doesn't take any arguments
// groceryList.pop() - the Array will now be ['bananas','coffee beans'];
// push() takes an argument and adds one or more items to the end of the Array
// groceryList.push('milk') - the Array is now ['bananas','coffee beans','milk'];
// Both are mutator methods, and they both return a value
// The return value of pop() is the item that was removed
// The return value of push() is the new length of the Array

// shift() && unshift()
// shift() removes an item from the beginning of an Array and doesn't take any arguments
// groceryList.shift() - The Array now looks like ['coffee beans','soap'];
// unshift() adds one or more items to the beginning of the array
// groceryList.unshift('milk') - The Array is now ['milk','coffee beans','soap']
// Both are mutator methods, and they both return a value
// The return value of shift() is the item that was removed
// The return value of unshift() is the new length of the Array
// Unlike pop() && push(), shift() && unshift() affect the index of all other items in the Array
// When you remove an item from the beginning using shift(), all the other items now have a new index - their original index minus one
// When you add an item from the beginning using unshift(), all the items now have a new index - their original index plus one

// join()
// The join() method takes all items in an Array and returns a string containing those items
// It takes an optional string argument that will be used as the separator - if no argument is provided, a comma (,) is used as the default separator
// If you were to declare a variable and assign the return value of an Array that you join() with no separator,
// That variable now contains a string with the array items in it separated by a comma
// const groceries = groceryList.join(); - groceries = 'bananas,coffee beans,soap'
// If you provide an argument to use as a separator such as two dashes --:
// const groceries = groceryList.join('--'); - groceries = 'bananas--coffee beans--soap'
// The join() method does not mutate the original array

// includes()
// The includes() method is used to check if an item exists inside an Array
// You use it with an argument of the item you'd like to check for like so:
// const itemInArray = groceryList.includes('soap') - itemInArray true
// If the argument you provide exists in the Array it will return true, Otherwise it will return false
// This method will not mutate the original Array

// indexOf()
// indexOf() also checks if an item exists in an Array, but instead of returning a boolean value, it returns the index of the item if it exists in the Array
// const itemIdx = groceryList.indexOf('soap'); - itemIdx 2
// If your argument doesn't exist:
// const itemIdx = groceryList.indexOf('tea'); - itemIdx -1
// It returns the value of minus one (-1)
// indexOf() does not mutate the original Array
