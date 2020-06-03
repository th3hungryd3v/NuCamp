// Addition assignment operator +=
// Subtraction assignment operator -=
// Increment operator ++
// Decrement operator --

// Addition assignment operator +=

let x = 1;
// How would I add x to 2
x + 2; // would equal 3 but the value of x is still 1
// how about
x = x + 2; // Now the value of x is 3 but an easier way to do it would be
x += 2; // After the 2 is added to x the = operator will store the new value into x when it's finished adding

// Subtraction assignment operator -=

// The Subtraction assignment operator works exactly the same way**

// Addition & Subtraction assignment operators are BINARY meaning they take both left and right operands

// Increment & Decrement operators are UNARY meaning they add or subtract 1 from their operand variable

// Increment & Decrement can be prefixed: ++variable || postfixed: variable++
let y = 1;
++y; // Now y equals 2
--y; // Now y equals 1 again
y++; // 1 will print in the console because this will return the value before implementation, but if you check the value of y it is 2