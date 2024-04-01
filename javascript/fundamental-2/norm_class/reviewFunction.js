"use strict";
// Function expression
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearUntillRetirements = function (birthYear, firstname) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstname} is going to retire in ${retirement} time`);
    return retirement;
  } else {
    return -1;
  }
};
//   return

const result = yearUntillRetirements(1991, "Effa");
console.log(result);
console.log(yearUntillRetirements(1970, "Mike"));
