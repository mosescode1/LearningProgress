const person = {
  name: 'Effa',
  age: 20,
  // Method
  greet() {
    console.log('Hello', this.name);
  },
  getDetails() {
    console.log(this.name, this.age);
  },
  toString() {
    return this.name;
  },
};
person.greet();
person.getDetails();
console.log(person.toString());
console.log(Object.prototype.constructor === Object);
