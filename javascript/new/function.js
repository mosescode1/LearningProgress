let res = add(2, 4, 5);
function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

res = {
  name: 'effa',
  age: 30,
};
console.table(res);

// Anonymous function a function without a name
const show = function () {};

console.log(show);
