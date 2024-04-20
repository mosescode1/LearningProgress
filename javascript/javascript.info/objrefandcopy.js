let a = 30;
let b = a;
console.log(a, b);

// This Create a Reference
let c = {};
let d = c;
console.log(c, d); // d reffrences to c
c.name = "effa";
console.log(c, d);
console.log(c === d);
/**
 * TO create an Object copy
 * we can use for loops or ussing the Object.assign method
 */
const profile = {
  name: "Effa",
  age: 40,
  class: "NYSC",
};
const profile1 = {};
for (key in profile) {
  profile1[key] = profile[key];
}
console.log(profile === profile1);
console.log(profile1);
const profile3 = {
  name: "Effa",
  age: 40,
  class: "NYSC",
};
const profile4 = {};
// profile4 is the target
// profile3 is where we are copying from
// if the property name is already available it's overwritten
Object.assign(profile4, profile3);
console.log(profile4);

const profile5 = {
  name: "Effa",
  age: 40,
  class: {
    dept: "IME",
  },
};

const clone = { ...profile5 };
console.log(clone);
// structured clone
let user1 = {};
user1.me = user1;
let clones = structuredClone(user1);
console.log(clones);
console.log(clones.me === clones);
