const firstName = "Effa";
const lastName = "Moses";
const birthYear = 1990;
const year = 2024;
const job = "Learner";

// strings concatination
const description =
  "I'm " + firstName + ", a " + (year - birthYear) + " year's old " + job;
console.log(description);

// using a Template literal
// using backticks `` and ${} to call the variable
const newDescription = `i'm ${firstName} a ${
  year - birthYear
} year's old ${job}!`;

console.log(newDescription);

// creating a new line
console.log("string \n multiple \n lines");

// template strings for new line
console.log(`string
in 
backtick`);
