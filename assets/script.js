// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var passCreation = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword(){
    while (length < 8 || length > 128) {
        length = prompt("Choose a number between 8 and 128 to determine the character length of your password.");
        //if (length==null){
        if(length === "") {
            return "Enter a number between 8 and 128 to determine password character length.";
        }
        }
        var lowerCase = confirm("Do you want lower case in your password?")
        if (lowerCase==true){
            passCreation=passCreation.concat(lowercase)
        }
        var upperCase = confirm("Do you want upper case in your password?")
        if (upperCase==true){
            passCreation=passCreation.concat(uppercase)
        }
        var numbers = confirm("Do you want numbers in your password?")
        if (numbers==true){
            passCreation=passCreation.concat(number)
        }
        var specialChars = confirm("Do you want special characters in your password?")
        if (specialChars==true){
            passCreation=passCreation.concat(specialCharacters)
        }
        var generatedPassword = "";
        for (i = 0; i < length; i++){
            x = Math.floor(Math.random() * (passCreation.length));
            generatedPassword = generatedPassword.concat(passCreation[x])
        }
        return generatedPassword;
            // Display new randomly generated password 
}