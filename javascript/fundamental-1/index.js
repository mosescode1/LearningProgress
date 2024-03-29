let js = "amazing";
if (js === "amazing") alert("javascript is amazing");
console.log(40 + 8 + 23);
// make sure variableNames are descriptive
let myFirstJob = "programmer";
let myCurrentJob = "Teacher";
// this are not descriptive
let job1 = "programmer";
let job2 = "Teacher";

// use camel-casing in javascript
let firstName = "Effa";
// const are written in uppercase
console.log(firstName);
console.log(firstName);

console.log(firstName);

/* Data types in javascript
There are 7 types of primitive data-types in javascripts
* Numbers - used for decimals or floats
* Strings - Used for text anything in quote
* Boolean - logical type EIther True or False
* Undefined - a Variable not assigned, Empty variable
* Null - also means empty
* symbol - a value that is unique
* bigint - larger numbers than Number

*/
let num = 20;
console.log(typeof num);

let undefin; // A varibale thats has not been adigned
console.log(typeof undefin);

// Dynamic typing - changing the content of a variable
let javascriptIsFun = "Javascript is amazing";
console.log(typeof javascriptIsFun);

// reassigning a variable
javascriptIsFun = true;
console.log(typeof javascriptIsFun);

/*
Declaring variables in javascript and which one to use
*/
// we use let to declare varibales that can change later
// when we want to declare an empty variable and
let age = 30;
age = ++age;

// Const
// Values that cannot be changed throughput the program
// we cannot declare empty const variable
const year = 1991;
// year = 1990; // returns an error an immutable variable

// Var is the old way of declaring variable works like let
//  but they are all different
