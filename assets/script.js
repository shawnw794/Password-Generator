// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Elements
const password = document.querySelector('#password')
const button = document.querySelector('button')

// Password Data
let charaters = ;
let passwordLength = 15;
let passwordValue = '';

// Create Password
const createPassword = () => {
passwordValue = '';
}

for(let i = 0, i <passwordLength; i++) {
  let number = Math.floor(Math.random() * characters.length);
  passwordValue += charaters.substring(number, number +1);
}

 // Event
 button.addEventListener('click', createPassword)

form.addEventListener('')
