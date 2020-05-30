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
  console.log("passwordLength", passwordLength);

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
      "Does your password require lowercase characters?";
    lowercase = confirm(lowercasePrompt);
    console.log("lowercase", lowercase);

    const uppercasePrompt =
      "Does your password require uppercase characters?";
    uppercase = confirm(uppercasePrompt);
    console.log("uppercase", uppercase);

    const numericPrompt =
      "Does your password require numeric characters?";
    numeric = confirm(numericPrompt);
    console.log("numeric", numeric);

    const specialPrompt =
      "Does your password require special characters?";
    special = confirm(specialPrompt);
    console.log("special", special);
  } // forces user to select at least one character type before leaving while loop
  while (!lowercase && !uppercase && !numeric && !special)

  // make strings for each character type
  // combine into one string for all character types selected
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  console.log("lowercase", lowercaseChars.length);
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  console.log("uppercase", uppercaseChars.length);
  const numbers = "0123456789"
  console.log("numbers", numbers.length)
  const specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  console.log("specialChars", specialChars);
  
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

  let password = ''


  for (let i = 0; i < passwordLength; i++) {
  }
  return password
}

// generate random number between min & max (from w3schools)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);