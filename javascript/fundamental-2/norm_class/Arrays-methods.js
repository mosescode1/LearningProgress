const friends = ["Micheal", "Steven", "Peter", "Grace"];
// adding to the end of an array
// Also returns the new length of the array
const newLength = friends.push("Moses");
console.log(friends);
console.log(newLength);

// adding to the beggining of the array
// also Returns the length of the new array
friends.unshift("john");
console.log(friends);

// Remove element at the end of the array
// Returns the elememnt removed
const poppped = friends.pop();
console.log(friends);
console.log(poppped);

// Removes first element
// retunrns the element that was removed
friends.shift();
console.log(friends);

// returns the index of the first occurance of the value
// if not found it return -1
console.log(friends.indexOf("Grace"));

// returns True if the data is in the array
// and false if its not present
// uses strict equality
friends.push(20);
console.log(friends.includes("Steven"));
// console.log(friends.includes("20")) returns False
// type conversion is not done
console.log(friends.includes(20));
// returns a boolean falue
friends.includes("Gra")
  ? console.log("yeah you have a friend call grace")
  : console.log("You dont");
