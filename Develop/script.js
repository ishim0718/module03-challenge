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
  const specialChar = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~'; 
  return specialChar[Math.floor(Math.random() * specialChar.legnth)];
} 

//set password length
var passwordLength = prompt("How long would you like the password to be?", "Input a number between 8 and 128")

if (passwordLength != null) {
  prompt("Please enter a valid number between 8 and 128")
}
else (passwordLength < 8) {
  prompt("Please enter a valid number between 8 and 128")
}
else (passwordLength > 128) {
  prompt("Please enter a valid number between 8 and 128")
}
else  (Number.isInteger(passwordLength) == false) {
  prompt("Please enter a valid number between 8 and 128")
}
 return;



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
