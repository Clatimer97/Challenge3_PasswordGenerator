// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var charUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var charLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var specialChar = ["!", "@", "#", "$", "%", "&", "*"];

function generatePassword() {
  var first = confirm("Do you want uppercase characters in your password?");
  console.log("first ", first);
  var second = confirm("Do you want lowercase characters in your password?");
  console.log("second ", second);

  var third = confirm("Do you want numbers in your password?");
  console.log("third ", third);

  var fourth = confirm("Do you want special characters in your password?");
  console.log("fourth ", fourth);

  var fifth = prompt(
    "Please choose a length for your password. Must be between 8 and 128 characters in length"
  );
  if (!first && !second && !third && !fourth && (fifth < 8 || fifth > 128)) {
    alert("you must choose at least one parameter!");
    alert("Password must be between 8 and 128 characters!");
    writePassword();
    return;
  } else if (!first && !second && !third && !fourth) {
    alert("you must choose at least one parameter!");
    writePassword();
    return;
  } else if (fifth < 8 || fifth > 128) {
    alert("Password must be between 8 and 128 characters!");
    writePassword();
    return;
  }

  console.log("fifth ", fifth);

  var userChoice = [];
  var passwordLength = "";

  if (first) {
    userChoice = userChoice.concat(charUpper);
    console.log("userChoice", userChoice);
  }
  if (second) {
    userChoice = userChoice.concat(charLower);
    console.log("userChoice", userChoice);
  }
  if (third) {
    userChoice = userChoice.concat(number);
    console.log("userChoice", userChoice);
  }
  if (fourth) {
    userChoice = userChoice.concat(specialChar);
    console.log("userChoice", userChoice);
  }
  for (var i = 0; i < fifth; i++) {
    passwordLength += userChoice[Math.floor(Math.random() * userChoice.length)];
    console.log(passwordLength);
  }
  return passwordLength;
}
