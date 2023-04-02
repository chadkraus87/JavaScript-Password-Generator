// Assignment code here
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericCharacters = "0123456789"
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// Prompt the user for their password criteria and generate a password.
function generatePassword() {
  var passwordLength = parseInt(
    prompt("Enter the length of your desired password. Note: Your password must be at least 8 characters long and no more than 128.")
  );

  // Check for a valid password length.
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please try again.");
    return;
  }

  // Prompt the user for character types to include in their generated password.
  var includeLowercase = confirm("Would you like your password to have lowercase letters?");
  var includeUppercase = confirm("Would you like your password to have uppercase letters?");
  var includeNumeric = confirm("Would you like your password to have numbers?");
  var includeSpecial = confirm("Would you like your password to have special characters?");

  // Check to see if at least one character type has been selected.
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type and try again.");
    return;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);