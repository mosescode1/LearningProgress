let markWeight = 78;
let markHeight = 1.69;
let johnHeight = 1.95;
let johnWeight = 92;

// Calculate the body mass index
function bmiCalculator(weight, height) {
  const bmi = weight / height ** 2;
  return bmi;
}

let johnBmi = bmiCalculator(johnWeight, johnHeight);
// console.log(johnBmi);
let markBmi = bmiCalculator(markWeight, markHeight);
// console.log(markBmi);

if (markBmi > johnBmi) {
  console.log(`Mark's BMI ${markBmi} is higher than john's BMI ${johnBmi}`);
} else {
  console.log(`John's BMI ${johnBmi} is higher than Mark's BMI ${markBmi}`);
}
