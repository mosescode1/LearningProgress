const percentageOfWorldss = function (population) {
  return (population / 7900) * 100;
};
const populations = [2000000, 300000, 400000, 50000];
console.log(populations.length == 4);
// percentages of each populations
const percetages = [
  percentageOfWorldss(populations[0]),
  percentageOfWorldss(populations[1]),
  percentageOfWorldss(populations[2]),
  percentageOfWorldss(populations[3]),
];

console.log(percetages);
