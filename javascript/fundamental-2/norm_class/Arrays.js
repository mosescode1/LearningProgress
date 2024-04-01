// ARRAYS DATA-Structure
// the two main data structure in javascript is array and objects

// Creating an array
const friends = ["Micheal", "Steven", "Peter", "Grace"];
console.log(friends);
//annother way
const years = new Array(1991, 1992, 1993);
console.log(years);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);
console.log((friends[2] = "moses"));

// years = [119, 334]; wont work because of const
// but we can change the itens in a array because an array
// is not a primitive data type
// console.log(years);
const profile = ["jonas", "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(profile);
