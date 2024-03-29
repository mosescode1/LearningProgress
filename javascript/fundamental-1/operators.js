// Mathematical Operations in javascript
const Birthyear = 1990;

// Subtraction in javascript
const jonasAge = 2037 - Birthyear;
const sarahAge = 2020 - Birthyear;
// Multiplication and division
console.log(sarahAge * 2, jonasAge / 3);
// power
// 2 * 2 * 2
const result = 2 ** 3;
console.log(result);

// Addition can be used to concatinate strings together
// and can also be use to perform mathematical operations

const myName = "Effa";
const surname = "Eteng";
console.log(myName + " " + surname);
// for numbers
const add = 5 + 3 + 4;
console.log(add);

// The assignment operator
// which is right to left
// whats is on the right is addigned to the left

let x = 3;
x += 10; // x = x + 10
// there  are more
// *=, -=, /=, %=, ++, --
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

/*
===================
comparism operators
===================
*/
// basically working with booleans
// using >, <, >=, <=
console.log(jonasAge > sarahAge);
console.log(sarahAge <= 18);
