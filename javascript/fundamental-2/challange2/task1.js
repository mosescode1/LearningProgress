/**
 * Arrow Function
 * calculate the average score of each team
 * with 3 scores
 */
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphinsAverage = calcAverage(85, 54, 41);
const koalasAverage = calcAverage(23, 34, 27);
console.log(dolphinsAverage);
console.log(koalasAverage);
/**
 * Function declaration
 * used to check the winner
 */
function checkWinner(dolphinAvg, koalasAvg) {
  if (dolphinAvg > koalasAvg && dolphinAvg > koalasAvg * 2) {
    console.log(
      `Dolphins win with and avg of ${dolphinsAverage} while koalas avg is ${koalasAverage}`
    );
  } else if (dolphinAvg < koalasAvg && koalasAvg > dolphinAvg * 2) {
    console.log(
      `Koalas win with and avg of ${koalasAverage}  while dolphins avg is ${dolphinsAverage}`
    );
  } else {
    console.log("No team wins..........!!!");
  }
}

checkWinner(dolphinsAverage, koalasAverage);
