const day = "wednesday ";

switch (day) {
  case "monday":
    console.log("plan my day");
    console.log("today is monday");
    break;
  case "tuesday":
    console.log("preparing");
    break;
  case "wednesday":
  case "thursday":
    console.log("runs monday and thursday");
    break;
  case "friday":
    console.log("party");
    break;
  case "saturday":
  case "sunday":
    console.log("enjoy the weekend");
  default:
    console.log("Not a valid day");
}

// Ternaru Operators

const age = 10;
age >= 18 ? console.log("allowed to drink beer") : console.log("not allowed");
