// Assignment code here.
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericCharacters = "0123456789"
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// Prompt the user for their password criteria and generate a password.
function generatePassword() {
  var passwordLength = parseInt(
    prompt("Please choose the length of your password by selecting a number between 8 and 128.")
  );

  // Check for a valid password length.
  if (!(passwordLength >= 8 && passwordLength <= 128)) {
    alert("Invalid password length. Please try again.");
    return;
  }

  // Prompt the user for character types to include in their generated password.
  var includeLowercase = confirm("Would you like your password to have lowercase letters?");
  var includeUppercase = confirm("Would you like your password to have uppercase letters?");
  var includeNumeric = confirm("Would you like your password to have numbers?");
  var includeSpecial = confirm("Would you like your password to have special characters?");

  const characterTypes = [includeLowercase, includeUppercase, includeNumeric, includeSpecial];

  if (characterTypes.every(type => !type)) {
    alert("Please select at least one character type and try again.");
    return;
  }
  

  // Create a character pool based on the selected criteria.
  var charPool = "";
  if (includeLowercase) {
    charPool += lowercaseCharacters;
  }
  if (includeUppercase) {
    charPool += uppercaseCharacters;
  }
  if (includeNumeric) {
    charPool += numericCharacters;
  }
  if (includeSpecial) {
    charPool += specialCharacters;
  }

// Generate a password using the pool of characters.
const password = Array.from({ length: passwordLength }, () =>
  charPool.charAt(Math.floor(Math.random() * charPool.length))
).join('');

  return password;
}

// Get references to the #generate element.
var generateBtn = document.querySelector("#generate");

// Write the generated password to the #password input.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }
}

// Add event listener to generate button.
generateBtn.addEventListener("click", writePassword);