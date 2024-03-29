let bill = 430;
const tipPercentage =
  bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
console.log(tipPercentage);
console.log(
  `Your bill is ${bill} and your tip is ${tipPercentage} your total total bill is ${
    bill + tipPercentage
  }`
);
