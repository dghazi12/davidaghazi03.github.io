var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener('click', writePassword);

var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var symbols = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '/', ':', ';', '<', '=', '>', '?', '@', '[', '^', '_', '{', '|', '}', '~',]

function writePassword() {

  var password = criteriaPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function criteriaPassword() {

  var length = prompt("How many characters will your password be? Enter a number between 8 and 128");

  if (length >= 8 && length <= 128) {
    var lowercase
  } else {
    return criteriaPassword()
  }

  var lowercase = confirm("Would you like to include lowercase letters?");
  var uppercase = confirm("Would you like to include uppercase letters?");
  var numeric = confirm("Would you like to include numeric values?");
  var special = confirm("Would you like to include special characters?");

  var minimumCount = 0;

  var minimumNumeric = "";
  var minimumLowercase = "";
  var minimumUppercase = "";
  var minimumSpecialCharacters = "";

  var functionArray = {

    getRandomLower: function () {
      lower
      return lower[Math.floor(Math.random() * lower.length)];
    },

    getRandomUpper: function () {
      upper
      return upper[Math.floor(Math.random() * upper.length)];
    },

    getRandomNumber: function () {
      number
      return number[Math.floor(Math.random() * number.length)];
    },

    getRandomSymbol: function () {
      symbols
      return symbols[Math.floor(Math.random() * symbols.length)];
    }
    
  }

  if (lowercase === true) {
    minimumLowercase = functionArray.getRandomLower();
    minimumCount++;

  }

  if (uppercase === true) {
    minimumUppercase = functionArray.getRandomUpper();
    minimumCount++;

  }

  if (numeric === true) {
    minimumNumeric = functionArray.getRandomNumber();
    minimumCount++;

  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getRandomSymbol();
    minimumCount++;

  }

  var generatedPassword = "";

  for (let i = 0; i < (parseInt(length) - minimumCount); i++) {

    generatedPassword = generatedPassword + (lower && upper && number && symbols)[Math.floor(Math.random() * (lower.length - 1))]
  }

  generatedPassword += minimumNumeric;
  generatedPassword += minimumLowercase;
  generatedPassword += minimumUppercase;
  generatedPassword += minimumSpecialCharacters;

  return generatedPassword;

}