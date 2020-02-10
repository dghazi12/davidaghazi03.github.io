// Provided in assignment
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
var charactersLength = characters.length;

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener('click', writePassword);

function writePassword() {
  var password = criteriaPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function criteriaPassword() {
  var length = prompt("How many characters will your password be? Enter a number between 8 and 128");
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
      var lower = 'abcdefghijklmnopqrstuvwxyz'
      return lower[Math.floor(Math.random() * lower.length)];
    },

    getRandomUpper: function () {
      var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      return upper[Math.floor(Math.random() * upper.length)];
    },

    getRandomNumber: function () {
      var number = '0123456789'
      return number[Math.floor(Math.random() * number.length)];
    },

    getRandomSymbol: function () {
      var symbols = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~'
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
    var randomNumberPicked = Math.floor(Math.random() * 4);

    generatedPassword += randomNumberPicked;

}
    
    generatedPassword += minimumNumeric;
    generatedPassword += minimumLowercase;
    generatedPassword += minimumUppercase;
    generatedPassword += minimumSpecialCharacters;

    return generatedPassword;

}