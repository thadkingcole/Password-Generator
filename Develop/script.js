// Assignment Code
const generateBtn = document.querySelector("#generate");


// generate random number between min & max (from w3schools)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// generate password with user-given criteria
function generatePassword() {
  
  // initialize variables with function scope
  let lowercase = false,
  uppercase = false,
  numeric = false,
  special = false,
  password = "";

  // prompt user for length of password between 8 and 128
  const passwordLengthPrompt =
    "Choose your desired password length between 8 & 128 characters.\n" +
    "Default length is 8 characters.";
  let passwordLength = Number(prompt(passwordLengthPrompt, "8"));
  // validate passwordLength user input
  if (passwordLength > 128) {
    passwordLength = 128;
  }
  else if (isNaN(passwordLength) || passwordLength < 8) {
    passwordLength = 8;
  }

  // make strings for each character type
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  // combine into one string for all character types selected
  let availChars = "";

  do {
    let chosenTypes = "\nChosen Types:";
    const instructions =
      "\nPress [OK] for yes" +
      "\nPress [Cancel] for no\n";

    // ask user if they want lowercase characters
    const lowercasePrompt =
      "(1/4) Does your password require lowercase characters?" + instructions;
    lowercase = confirm(lowercasePrompt);
    if (lowercase) {
      chosenTypes += "\nlowercase";
      availChars += lowercaseChars;
    }

    // ask user if they want uppercase characters
    const uppercasePrompt =
      "(2/4) Does your password require uppercase characters?" +
      instructions + chosenTypes;
    uppercase = confirm(uppercasePrompt);
    if (uppercase) {
      chosenTypes += "\nuppercase";
      availChars += uppercaseChars;
    }
    
    // ask user if they want numeric characters
    const numericPrompt =
      "(3/4) Does your password require numeric characters?" +
      instructions + chosenTypes;
    numeric = confirm(numericPrompt);
    if (numeric) {
      chosenTypes += "\nnumeric";
      availChars += numbers;
    }

    // ask user if they want special characters
    const specialPrompt =
      "(4/4) Does your password require special characters?" +
      instructions + chosenTypes;
    special = confirm(specialPrompt);
    if (special) {
      chosenTypes += "\nspecial";
      availChars += specialChars;
    }

    // if user did not select at least one character type...
    if (!lowercase && !uppercase && !numeric && !special) {
      // tell user they have to pick at least one character type...
      const charTypePrompt =
        "You did not select any character types.\n" +
        "Please select at least one character type.";
      alert(charTypePrompt);
      availChars = "";
    }

  } // ...and repeat the do loop until at least one type is chosen
  while (!lowercase && !uppercase && !numeric && !special);

  // generate the password given the user chosen parameters
  do {
    // initialize/reset password to empty string
    password = "";

    // add to it from available characters until password length is reached
    for (let i = 1; i <= passwordLength; i++) {
      const charToAdd = getRndInteger(0, availChars.length - 1);
      password += availChars.charAt(charToAdd);
    }
  } // verify all user-selected char types are in password; otherwise, redo
  while (
    (lowercase && password.search(/[a-z]/) === -1) ||
    (uppercase && password.search(/[A-Z]/) === -1) ||
    (numeric && password.search(/\d/)) === -1 ||
    (special && password.search(RegExp("[" + specialChars + "]")) === -1)
  );
  return password;
}


// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);