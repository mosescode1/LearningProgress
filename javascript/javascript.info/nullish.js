let num;
// if num is undefiined or null 10 is picked out to the console
console.log(num);
console.log(num ?? 10);

// we can also use nullish operator to modify a variable or set a default
num ??= 100; // num has been modified to 100 here since num is undefined / null
console.log(num);

let numb = prompt("number");
console.log(numb);

numb = numb ?? 100;
console.log(numb);
