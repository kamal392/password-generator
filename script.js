// Assignment code here

var pwdCriteria = {
  pwdLength: 0,
  lowercaseArr: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  uppercaseArr: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L","M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  pwdNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  specialArr: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",","-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]//32
}
// function to generate password
function generatePassword() {
  var result = "";
  var passwordLength = 0;
  var upperCase;
  var lowerCase;
  var numbers;
  var specialChar;

  passwordLength = 0;
  pwdCriteria.pwdLength = 0;
  result = "";

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Enter the number of characters (from 8-128) you would like your password to be.");

    if (passwordLength === null) {
      return "Your secure password";
    }
    else {
      if (!isFinite(passwordLength)) {
        alert("You did not enter a number");
        return "Your secure password";
      }
      else {
        if (passwordLength < 8 || passwordLength > 128) {
          alert("You must enter an number from 8 to 128.  Please try again.");
          return "Your secure password";
        }
        else {
          showPrompts();
          while (pwdCriteria.pwdLength < passwordLength) {
            if (lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
              alert("You must select at least one criteria of lowercase, uppercase, numbers or special characters")
              showPrompts();
            }
            else {
              if (lowerCase === true && pwdCriteria.pwdLength < passwordLength) {
                var lc = pwdCriteria.lowercaseArr[Math.floor(Math.random() * 26)]
                result = result + lc;
                pwdCriteria.pwdLength++;
              }             
              if (specialChar === true && pwdCriteria.pwdLength < passwordLength) {
                var sc = pwdCriteria.specialArr[Math.floor(Math.random() * 32)]
                result = result + sc;
                pwdCriteria.pwdLength++;
              }
              if (upperCase === true && pwdCriteria.pwdLength < passwordLength) {
                var uc = pwdCriteria.uppercaseArr[Math.floor(Math.random() * 26)]
                result = result + uc;
                pwdCriteria.pwdLength++;
              }
              if (numbers === true && pwdCriteria.pwdLength < passwordLength) {
                var num = pwdCriteria.pwdNumber[Math.floor(Math.random() * 10)]
                result = result + num;
                pwdCriteria.pwdLength++;
              }
            }
          }
        }
      }
    }
    return result;
    function showPrompts() {
      lowerCase = confirm("Include lowercase characters?");
      upperCase = confirm("Include upper case characters?");
      numbers = confirm("Include numbers (0-9)?");
      specialChar = confirm("Include Special characters? (ex: @, &, %, etc.)");
    }
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
