const myCountry = {
  country: "Nigeria",
  capital: "Lagos",
  language: "English",
  population: 2000000,
  neighbours: ["Ghana", "Mali", "chad", "benin"],
};

console.log(
  `${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital of ${myCountry.capital}`
);

console.log(
  `${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital of ${myCountry.capital}`
);

myCountry["population"] += 20000000000000000;
console.log(myCountry);
myCountry.population -= 20000000000000000;
console.log(myCountry);
