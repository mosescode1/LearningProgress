class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  set diameter(value) {
    this.radius = value / 2;
    console.log('SET', value);
  }
  get diameter() {
    return this.radius * 2;
  }
}

let obj = new Circle(100);
// only Object.assign can set the diameter a ... operator cant
// let newObj = Object.assign(obj, { diameter: 100 });
// console.log(newObj);
let obj3 = {
  ...obj,
};
console.log(obj3);
