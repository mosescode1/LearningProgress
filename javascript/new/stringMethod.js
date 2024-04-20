let string1 = 'this is a variable';
let val = string1.endsWith('e');
console.log(val);

// replace a substring

val = string1.replace(/\bis\b/, 'with');
console.log('replace==>', val);

// replace all
string1 = "you don't know what you don't know till you know";
val = string1.replaceAll('you', 'i');
console.log(val);

val = string1.toUpperCase();
console.log(val);
