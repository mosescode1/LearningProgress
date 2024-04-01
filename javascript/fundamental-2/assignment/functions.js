function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} and it's capital city is ${capitalCity}`;
}

const user1Country = describeCountry("nigeria", "1 million", "lagos");
const user2Country = describeCountry("niger", "4 million", "gos");
const user3Country = describeCountry("algeria", "5 million", "lag");
console.log(user1Country);
console.log(user2Country);
console.log(user3Country);

// Function Decleration
function percentageOfWorld(population) {
  return (population / 7900) * 100;
}
console.log(percentageOfWorld(1441));
// Function Expression
const percentageOfWorldss = function (population) {
  return (population / 7900) * 100;
};
console.log(percentageOfWorldss(1441));
// Arrow Function
const percentageOfWorlds = (population) => (population / 7900) * 100;
console.log(percentageOfWorlds(90090));

// function calling another function
function describePopulation(country, population) {
  const percentage = percentageOfWorld(population); // calling the percentage if the world function
  const return_value = `${country} has a ${population} million people which is about ${percentage}% of the world`;
  return return_value;
}
console.log(describePopulation("china", 1441));
