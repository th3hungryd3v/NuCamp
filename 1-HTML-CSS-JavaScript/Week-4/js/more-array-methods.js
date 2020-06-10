// More Array Methods

// CONCAT
// The concat() method combines two arrays into one.
// Return value is a new array containing all items for both arrays.
// Does not mutate original arrays, so a return value may need an assignment to a new variable
// Syntax: first.Array.concat(secondArray);
// Example:
// Two different const Arrays
const primaryColors = ['red','blue','yellow'];
const secondaryColors = ['purple','green','orange'];
// Combine both arrays and save to a const variable named colorsArray
const colorsArray = primaryColors.concat(secondaryColors);
// print the new array to the console
console.log(colorsArray);
// OUTPUT:
// (6) ["red", "blue", "yellow", "purple", "green", "orange"]

// SORT
// The sort() method alphabetically sorts an array of strings
// Mutates the original array, so you don't need to assign its return value to a new variable
// Syntax: array.sort();


// REVERSE
// The reverse() method sorts an array alphabetically, in reverse
// Mutates original array
// Syntax: array.reverse();

// SLICE
// The slice() method copies a part of an array and places it into a new array
// Does not mutate the original array
// Return value is a new array with copies of the "sliced" out items
// Syntax: array.slice(beginIndex, endIndex)
// If you don't enter any arguments it'll just copy the whole array
// If you don't include the endIndex, the slice will start from the beginIndex and slice out all the way to the end of the array
// Example:
const testArray = ['a','b','c','d','e','f','g'];
let slicedArray = testArray.slice(2,5);
console.log(slicedArray); // Output: Both Arguments: (3) ["c", "d", "e"]; One Argument: (5) ["c", "d", "e", "f", "g"]; No Argument: (7) ["a", "b", "c", "d", "e", "f", "g"]

// SPLICE
// The splice() method is used to insert, add to, or remove items from an array at any point
// Mutates the original array

// SPLICE() TO INSERT
// You need at least 3 parameters
// Syntax: array.splice(atIndex, 0, item)
// Parameter 1: where to insert
// Parameter 2: 0, because you're not trying to replace/delete an item
// Parameter 3: Item to insert

// Example:
const anotherTestArray = ['a','b','c','d','e','f','g'];
anotherTestArray.splice(2, 0, 'yourMom');
console.log(anotherTestArray); // Output: (8) ["a", "b", "yourMom", "c", "d", "e", "f", "g"]

// Inserting more than one item
// Syntax: array.splice(atIndex, 0, item1, item2, item3, ...)

// SPLICE() TO REMOVE
// Use 2 parameters to remove items from an array
// Syntax: array.splice(atIndex, numItemsToRemove)
// Example:
anotherTestArray.splice(2,5);
// splice() will return the removed items: (5) ["yourMom", "c", "d", "e", "f"]
console.log(anotherTestArray); // Output: (3) ["a", "b", "g"]


// SPLICE() TO REPLACE
// Use 3 parameters to replace item(s) in an array
// Syntax: array.splice(atIndex, numItemsToReplace, item(s))
// Example:
anotherTestArray.splice(2, 5, 'c','d','e','f')
// splice() returns the replaced item(s): ["g"]
console.log(anotherTestArray); // (6) ["a", "b", "c", "d", "e", "f"]