const neigbCountry = ["chad", "Ghana", "South-Africa", "Mali"];
console.log(neigbCountry);
// adding a new neigbouring country
neigbCountry.push("algeria");
console.log(neigbCountry);
// removing the new country
neigbCountry.pop();
console.log(neigbCountry);
if (!neigbCountry.includes("Germany")) {
  console.log("Not an African country");
}

const changedCountryIndex = neigbCountry.indexOf("Mali");
neigbCountry[changedCountryIndex] = "Germany";
console.log(neigbCountry);
