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
function generatePassword(){
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var number = "0123456789";
    var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    var passCreation = "";
    while (length < 8 || length > 34) {
        length = prompt("ask the user for the length of the password between 8 to 34 characters long");
        //if (length==null){
        if (length === "") {
            return "Chose any numbers between 8 and 34 for password length.";
        }
      }
        var lowerCase = confirm("Do you want lowercase in your password?")
        if (lowerCase==true){
            passCreation=passCreation.concat(lowercase)
        }
        var upperCase = confirm("Do you want uppercase in your password?")
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
        for (var i = 0; i < length; i++){
            var x=Math.floor(Math.random() * (passCreation.length));
            generatedPassword = generatedPassword.concat(passCreation[x])
        }
        return generatedPassword;
}