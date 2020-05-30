// Assignment Code
const generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Provide user with series of prompts to generate the password
// returns password(str)
function generatePassword() {
  // length of password between 8 and 128
  const passwordLengthPrompt =
    "Choose your desired password length (8-128 characters).\n" +
    "Default length is 8 characters."
  let passwordLength = prompt(passwordLengthPrompt)
  // validate passwordLength user input
  if (passwordLength > 128) {
    passwordLength = 128;
  }
  else if (passwordLength < 8) {
    passwordLength = 8;
  }
  // TODO validate input for non number entries

  // series of confirms to pick various character types
  // initialize choices to be used outside do-while loop
  let lowercase = true;
  let uppercase = false;
  let numeric = false;
  let special = false; 
  do {
    const charTypePrompt =
      "Please select at least 1 of the 4 following character types";
    alert(charTypePrompt);

    const lowercasePrompt =
      "(1/4) Does your password require lowercase characters?";
    lowercase = confirm(lowercasePrompt);

    const uppercasePrompt =
      "(2/4) Does your password require uppercase characters?";
    uppercase = confirm(uppercasePrompt);

    const numericPrompt =
      "(3/4) Does your password require numeric characters?";
    numeric = confirm(numericPrompt);

    const specialPrompt =
      "(4/4) Does your password require special characters?";
    special = confirm(specialPrompt);
  } // forces user to select at least one character type before leaving while loop
  while (!lowercase && !uppercase && !numeric && !special)

  // make strings for each character type
  // combine into one string for all character types selected
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789"
  const specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  
  let availChars = '';
  if (lowercase) {
    availChars += lowercaseChars;
  }
  if (uppercase) {
    availChars += uppercaseChars;
  }
  if (numeric) {
    availChars += numbers;
  }
  if (special) {
    availChars += specialChars;
  }

  // initalize password to empty string
  let password = '';
  // add to it from available characters until password length is reached
  for (let i = 0; i < passwordLength; i++) {
    charToAdd = getRndInteger(0, availChars.length - 1)
    password += availChars.charAt(charToAdd);
  }
  return password
}

// generate random number between min & max (from w3schools)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);