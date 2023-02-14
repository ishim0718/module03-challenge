// Assignment code here
//funtions to create random values
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function randomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function randomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function randomSymbol() {
  const symbols = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~'; 
  let i = symbols.length;
  return symbols[Math.floor(Math.random() * i)]; 
} 

var hasLower = prompt("Would you like to include lowercase letters in your password?", "y/n");
if (hasLower = "y", "n") {
  hasLower = hasLower;
}
else {
 prompt("Please enter a valid response");
}
var hasUpper = prompt("Would you like to include uppercase letters in your password?", "y/n");
if (hasUpper = "y", "n") {
  hasUpper = hasUpper;
}
else {
 prompt("Please enter a valid response");
}
var hasNumbers = prompt(("Would you like to include numbers in your password?", "y/n"));
if (hasNumbers = "y", "n") {
  hasNumbers = hasNumbers;
}
else {
 prompt("Please enter a valid response");
}
var passwordLength = prompt("How long would you like the password to be?", "Input a number between 8 and 128");
if (passwordLength > 8 && passwordLength < 128 && Number.isInteger(Number(passwordLength))) {
  passwordLength = passwordLength;
}
else {
  prompt("Please enter a valid response")
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
