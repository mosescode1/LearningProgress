// using {} literals
const person = {
  name: 'effa',
  age: 20,
  friends: ['joy', 'grace'],
};
console.log(typeof person);

// using factory function

function createObject(name, age) {
  return {
    name: name,
    age: age,
  };
}

const details = createObject('moses', 30);
console.log(typeof details);

// using class syntax
class newObjects {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const details2 = new newObjects('grace', 90);
console.log(typeof details2);

// constructor Function
function Car(name, color) {
  this.name = name;
  this.color = color;
}

const car = new Car('toyoto', 'green');
console.log(typeof car);

const Person = {};
// Object.create
const students = Object.create(person);
console.log(typeof students);
students.name = 'me';
console.log(students.name);
