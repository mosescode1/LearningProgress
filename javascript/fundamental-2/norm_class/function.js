function logger() {
  console.log("hello world");
}
logger();
logger();
logger();

// function fruitProcessor(fruits, liquid) {
//   console.log(fruits, liquid);
//   const juice = `Juice with ${fruits} fruits and mixed with ${liquid}`;
//   return juice;
// }

// let result = fruitProcessor(5, "water");
// console.log(result);

/**
 * Function Declaration
 * They are declared using the
 * Function keyword
 */

function calcAge(birthYear) {
  return 2037 - birthYear;
}

result = calcAge(1991);
console.log("This is your current Age Function Declaration:", result);

/**
 * Function Expressions
 */

const calcAge1 = function (birthYear) {
  return 2037 - birthYear;
};

result = calcAge1(1991);
console.log("This is your current Age Function Expression :", result);

/**
 * Arrow Function
 * we use the => so we called it arrow Function
 */

const calcAge2 = (birthYear) => 2037 - birthYear;
result = calcAge2(1991);
console.log("This is your current Age Arrow Function :", result);
/**
 * more code
 * @param {birthYear}
 * @returns {retirement}
 */
const yearUntillRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(`years until retirement is ${yearUntillRetirement(1991)}`);

/**
 * with more parameter
 */
const yearUntillRetirements = (birthYear, firstname) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstname} is going to retire in ${retirement} time`;
};

console.log(`${yearUntillRetirements(1991, "moses")}`);

/**
 * Function calling another function
 */
function fruitCutter(fruits) {
  return fruits * 4;
}

function fruitProcessor(fruits, liquid) {
  const fruitPieces = fruitCutter(fruits);
  //   console.log(fruits, liquid);
  const juice = `Juice with ${fruits} fruits and mixed with ${liquid}`;
  return juice;
}

console.log(fruitProcessor(2, "milk"));
