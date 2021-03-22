// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialOptions = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

var generatePassword = function () {
  var inputLength = parseInt(window.prompt("How many characters would you like your password to be? (8-128)"));

  if (inputLength >= 8 && inputLength <= 128) {
    var uppercase = window.confirm("Click OK to include UPPERCASE characters in your password?");
    var lowercase = window.confirm("Click OK to include lowercase characters in your password?");
    var numeric = window.confirm("Click OK to include numeric characters in your password?");
    var special = window.confirm("Click OK to include special characters in your password?");

  } else {
    return;
  }

  var masterArray = []
  // If user chooses uppercase, include uppercaseOptions
  if (uppercase === true) {
    masterArray = masterArray.concat(uppercaseOptions)
  }
  // If user chooses lowercase, inlcude lowercaseOptions
  if (lowercase === true) {
    masterArray = masterArray.concat(lowercaseOptions)
  }
  // If user chooses numeric, include numericOptions
  if (numeric === true) {
    masterArray = masterArray.concat(numericOptions)
  }
  // If user chooses special, include specialOptions
  if (special === true) {
    masterArray = masterArray.concat(specialOptions)
  }

  var password = ""
  for (let i = 0; i < inputLength; i++) {
    var index = Math.floor(Math.random() * masterArray.length);
    password += masterArray[index];
    console.log(password);
  }

  return password;
}



// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);