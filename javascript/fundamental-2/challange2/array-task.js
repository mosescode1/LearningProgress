function calcTip(bill) {
  let tipPercentage =
    bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
  return tipPercentage;
}
const bills = [125, 555, 44];

const tip1 = calcTip(bills[0]);
const tip2 = calcTip(bills[1]);
const tip3 = calcTip(bills[2]);

const tips = [tip1, tip2, tip3];
console.log(tips);
// total bill
const bill1 = tip1 + bills[0];
const bill2 = tip2 + bills[1];
const bill3 = tip3 + bills[2];
const total = [bill1, bill2, bill3];
console.log("total bill", total);
