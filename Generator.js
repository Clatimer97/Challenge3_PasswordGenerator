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

//Create arrays for variables globally; Special characters, uppercase letters, lowercase letters, and numbers have their own arrays
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

//use the generate password function given within the writePassword function and give it parameters
function generatePassword() {
//Used variables for the window.confirm screens since they hold Boolean values
  var first = confirm("Do you want uppercase characters in your password?");
  console.log("first ", first);

  var second = confirm("Do you want lowercase characters in your password?");
  console.log("second ", second);

  var third = confirm("Do you want numbers in your password?");
  console.log("third ", third);

  var fourth = confirm("Do you want special characters in your password?");
  console.log("fourth ", fourth);

  var fifth = prompt("Please choose a length for your password. Must be between 8 and 128 characters in length");
  console.log("fifth", fifth);
  //created alerts with multiple conditions so that users are required to enter acceptable parameters
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

  //created empty array to store all of the other arrays in 
  var userChoice = [];
  //created a variable for the final password to be called at the end of the function
  var passwordFinal = "";

  //used if statements with name of variables calling on their Boolean values; used concat function to add variables into empty array if parameters are met
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
    passwordFinal += userChoice[Math.floor(Math.random() * userChoice.length)];
    console.log(passwordFinal);
  }
  return passwordFinal;
};
