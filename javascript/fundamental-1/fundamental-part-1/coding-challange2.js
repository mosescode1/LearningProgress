const dolphinScore = [97, 112, 101];
const koalasScore = [109, 195, 123];

function calcAverage(score) {
  const length = score.length - 1;
  let average = 0;
  for (i = 0; i < length; i++) {
    average += score[i];
  }
  return average / 3;
}
const dolphinAverage = calcAverage(dolphinScore);
const koalaAverage = calcAverage(koalasScore);
if (dolphinAverage > koalaAverage && dolphinAverage >= 100) {
  console.log(`dolphin wins with an average score of ${dolphinAverage}`);
} else if (koalaAverage > dolphinAverage && koalaAverage >= 100) {
  console.log(`Koalas wins with an average score of ${koalaAverage}`);
} else if (
  koalaAverage === dolphinAverage &&
  koalaAverage >= 100 &&
  dolphinAverage >= 100
) {
  console.log("This is a Draw");
} else {
  console.log("No winner");
}
