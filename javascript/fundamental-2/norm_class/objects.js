// The object data structure is a key value pair
// they are use to group data relating to each other
// order of values are not required for accessing them
// arrays are for structured/ordered data and object are unstructred/ ordered data
const jonas = {
  firstName: "jonas",
  lastName: "schmedman",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["james", "grace", "mercy"],
};
// We can access the value in the object by using the dot notation
// or the bracket notation
console.log(jonas.friends);
// we can use a variable in the bracket nootation and thats the
// big diffrence
// we can put any expression in the bracket notation
console.log(jonas["friends"]);
const nameKey = "Name";
console.log(jonas["first" + nameKey]);

/**
 * We can use the dot notation or
 * the bracket notation to add new value
 */
jonas.location = "England";
jonas["loves"] = "coding";
console.log(jonas);

// IN class challange
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends and is best friend is ${jonas.friends[0]}`
);
