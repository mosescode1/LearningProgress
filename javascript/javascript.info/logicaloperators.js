const login = prompt("Who is there");

if (login == "Admin") {
  const password = prompt("Enter your password");
  // Authenticate the password
  if (password == null) {
    console.log("cancelled");
  } else if (password == "TheMaster") {
    console.log("welcome");
  } else {
    console.log("wrong password");
  }
} else if (login == null) {
  console.log("cancelled");
} else {
  console.log("i dont know you");
}
