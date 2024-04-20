Object.groupBy = function (array, keyGetter) {
  const map = new Map();
  array.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
};

const books = [
  { title: 'The Catcher in the Rye', genre: 'Fiction' },
  { title: 'Sapiens', genre: 'Non-Fiction' },
  { title: 'Dune', genre: 'Science Fiction' },
  { title: 'Die', genre: 'Science Fiction' },
  { title: 'To Kill a Mockingbird', genre: 'Fiction' },
];
// Group by method
const group = Object.groupBy(books, ({ genre }) => genre);
console.log(group);

const person = {
  name: 'effa',
  age: 20,
  school: 'NYSC',
};

// Object.values return an array of values
let val = Object.values(person);
console.log(val);

// Object.entries
// Return the key and value pair in a list
val = Object.entries(person);

console.log(val);

// Object.assign use to clone or merge
// creates a shallow copy
let style = Object.assign({}, person);
console.log('cloned', style);

// Object.is() used to check if two values are same
// its works like strict equality but it's quite diffrent
// +0 and -0 are treated as diffrent value while === treat them as same
// NaN is treated as Same and in === they are diffrent value
let result = Object.is(1, '1');
console.log(result);
