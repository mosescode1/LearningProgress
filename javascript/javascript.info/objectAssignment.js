// TASK 1
const user = {};
user.surname = "smith";
user.name = "John";
console.log(user);
user.name = "pete";
console.log(user);
delete user.name;
console.log(user);

// TASK 2

function isEmpty(schedule) {
  for (let key in schedule) {
    return false;
  }
  return true;
}

const schedule = {};
console.log(isEmpty(schedule));
schedule.name = "Effa";
console.log(isEmpty(schedule));

// TASK 3
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let result = 0;
for (key in salaries) {
  result += salaries[key];
}
console.log(result);

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
console.log(menu);
for (key in menu) {
  if (typeof menu[key] === "number") {
    menu[key] *= 2;
  }
}
