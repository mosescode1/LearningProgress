function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
};

let p1 = new Person('john', 'doe');
let p2 = new Person('Person', 'Doe');

// console.log(p1.getFullName());
// console.log(p2.__proto__);

let teach = {
  greet() {
    console.log(this.firstName, this.lastName);
  },
};
teach.__proto__ = p2;
console.log(teach.firstName);
teach.greet();
