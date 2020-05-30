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
  const passwordLength = prompt(passwordLengthPrompt)
  // validate passwordLength user input
  if (passwordLength > 128) {
    passwordLength = 128;
  }
  else if (passwordLength < 8) {
    passwordLength = 8;
  }
  console.log("passwordLength", passwordLength);

  // series of confirms to pick various character types
  const lowercasePrompt =
    "Does your password require lowercase characters?";
  const lowercase = confirm(lowercasePrompt);
  console.log("lowercase", lowercase);
  
  const uppercasePrompt =
    "Does your password require uppercase characters?";
  const uppercase = confirm(uppercasePrompt);
  console.log("uppercase", uppercase);

  const numericPrompt =
    "Does your password require numeric characters?";
  const numeric = confirm(numericPrompt);
  console.log("numeric", numeric);

  const specialPrompt =
    "Does your password require special characters?";
  const special = confirm(specialPrompt);
  console.log("special", special);

  // validate user input to have at least one character type

  // unicode decimal for each character type
  // lowercase = 97 - 122
  // uppercase = 65 - 90
  // numerical = 48 - 57
  // special = 33 - 126 not including the above ranges
  let password = ''
  for (let i = 0; i < passwordLength; i++) {
    let randChar = getRndInteger(97, 122);
    password += String.fromCharCode(randChar);
  }
  return password
}

// generate random number between min & max (from w3schools)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);