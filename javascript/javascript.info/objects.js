/**
 * An object is a data type that holds collection of
 * data, it involves keys and value pairs
 */

const userProfile = {
  FirstName: "Effa",
  LastName: "Eteng",
  age: 22,
  friends: ["Chinonso", "Bello", "Casmir"],
};

// Acessing an object through dot notation or bracket notation
console.log(userProfile.FirstName);
console.log(userProfile["FirstName"]);

// Assing a property to an object through dot notation or bracket notation
userProfile.newValue1 = "Newly Assigned with . notation";
userProfile["newValue2"] = "Newly Assigned with [] notation";
console.log("New values added :\n", userProfile);

// we can have a space seperated key but that is only done
// by the [] notation with the use of quotes

userProfile["spaced key"] = "A key created with a space in-between";
console.log("using spaced key \n", userProfile);

// and we can only access a space key with the bracket notation
// the . notation throws an error if you try to do that
// userProfile."spaced key" Throws an error
console.log("Accessing the spaced key-> value: ->", userProfile["spaced key"]);

// deleting a property using the delete keyword
delete userProfile.friends;
console.log("\n", "friends property has been deleted\n", userProfile);

// [] notation can takes in an expressions while dot notation can't
// [] notation can be assigned at runtime . notation can't
/**
 * Example
 * fruits = prompt("Enter fruits");
 * let user = {
 *      [fruits] = 5,
 * };
 * [] are much more powerful that . notation
 */

// property value short-Hand
function createUser(name, age) {
  return {
    name,
    age: age,
  };
}
let user = createUser("Eteng Moses Efa", 20);
console.log(user);

/**
 * In Objects python reserveed keywords are neglected
 * const user = {
 *    for: 20,
 *    return: "yes",
 *    if: "NO",
 * }
 * They can be used as a propery in objects
 */

/**
 * Types are converted when dea are used as key
 * object keys only use string
 */
let converted = {
  0: "int->string",
  true: "bool-string",
};
console.log(converted);

/**
 * Check if a property Exist in an object
 * using the in
 */

console.log("0" in converted);
// A key that is not found in an Object returns undefined
console.log(userProfile.now);

// for in loop walks over an object
for (let key in userProfile) {
  console.log(key, "=>", userProfile[key]);
}
