// Assignment Code
const generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
  /* 
    TODO:
      change "generate password" button to "change criteria"
      show new button "generate another (same criteria)"
  */
}


function generatePassword() {
  /*
    Provides user with series of prompts to generate password with the desired length and character types

    returns: (string) password
  */
  // length of password between 8 and 128
  const passwordLengthPrompt =
    "Choose your desired password length between 8 & 128 characters.\n" +
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

  do {
    let chosenTypes = "\nChosen Types:";
    const instructions =
      "\nPress [Ok] for yes" +
      "\nPress [Cancel] for no\n";

    const lowercasePrompt =
      "(1/4) Does your password require lowercase characters?" + instructions;
    var lowercase = confirm(lowercasePrompt);
    if (lowercase) {
      chosenTypes += "\nlowercase";
    }

    const uppercasePrompt =
      "(2/4) Does your password require uppercase characters?" + instructions + chosenTypes;
    var uppercase = confirm(uppercasePrompt);
    if (uppercase) {
      chosenTypes += "\nuppercase";
    }

    const numericPrompt =
      "(3/4) Does your password require numeric characters?" + instructions + chosenTypes;
    var numeric = confirm(numericPrompt);
    if (numeric) {
      chosenTypes += "\nnumeric";
    }

    const specialPrompt =
      "(4/4) Does your password require special characters?" + instructions + chosenTypes;
    var special = confirm(specialPrompt);
    if (special) {
      chosenTypes += "\nspecial";
    }

    if (!lowercase && !uppercase && !numeric && !special) {
      // tell user they have to pick at least one character type
      const charTypePrompt =
        "You did not select any character types.\n" +
        "Please select at least one character type.";
      alert(charTypePrompt);
    }

  } // while condition forces user to select at least one character type before leaving the loop
  while (!lowercase && !uppercase && !numeric && !special)

  // make strings for each character type
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  // combine into one string for all character types selected
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

  do {
    // initialize password to empty string
    var password = '';

    // add to it from available characters until password length is reached
    for (let i = 1; i <= passwordLength; i++) {
      charToAdd = getRndInteger(0, availChars.length - 1)
      password += availChars.charAt(charToAdd);
    }
  } // verify all user-selected char types are in password; otherwise, redo
  while (
    (lowercase && password.search(/[a-z]/) === -1) ||
    (uppercase && password.search(/[A-Z]/) === -1) ||
    (numeric && password.search(/\d/)) === -1 ||
    (special && password.search(RegExp("[" + specialChars + "]")) === -1)
  )
  return password
}


// generate random number between min & max (from w3schools)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);