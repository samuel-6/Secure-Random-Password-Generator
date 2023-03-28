// Assignment Code
var generateBtn = document.querySelector("#generate");

// ++ Created generatePassword function ++

function generatePassword() {

    // First I created four constants to store the characters that will be used.
    const numbers = '0123456789';
    const symbols = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    const lowcase = 'abcdefghijklmnopqrstuvwxyz';
    const uprcase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Then I created the "passwordLength" variable to define the length of the final password.
    // It uses the "parseInt" method to make sure that the final input is an integer number and not a string.
    // If the input is not a number, or the length is less than 8 or greater than 128 it shows an error message and exits the function.
    let passwordLength = parseInt(prompt('Enter the password lenth (min 8 | max 128):'));
    if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {

        alert('Please enter a number equal to or greater than 8 and less than 128');
        return;

    }

    // Then I created four more variables for the questions that the user will see.
    let includeNumbers = prompt('Include numbers? (yes / no):').toLocaleLowerCase();
    let includeSymbols = prompt('Include special symbols? (yes / no):').toLocaleLowerCase();
    let includeLowcase = prompt('Include lowercase letters? (yes / no):').toLocaleLowerCase();
    let includeUprcase = prompt('Include uppercase letters? (yes / no):').toLocaleLowerCase();

    // Then I created the "passwordCharacters" variable wich stores the type of characters that will be used.
    let passwordCharacters = '';
    if(includeNumbers === 'yes') {

      passwordCharacters += numbers;

    }
    if(includeSymbols === 'yes') {

      passwordCharacters += symbols;

    }
    if(includeLowcase === 'yes') {

      passwordCharacters += lowcase;

    }
    if(includeUprcase === 'yes') {

      passwordCharacters += uprcase;

    }

    // If the user doesn't select any of the four types of characters, then it shows an error message.
    if(passwordCharacters.length === 0) {

        alert('At least one type of character must be selected, please try again.');
        return;

    }

    // Finally I created the "randomPassword" variable wich will be the final password.
    // First it selects a random number with the "Math.random()" method and multiplies it with the length of "passwordCharacters".
    // Then it uses the "Math.floor" method wich always rounds down and returns the largest integer less than or equal to a given number.
    // Finally it uses the "charAt" method wich will return a character from the specified index of all the characters selected.
    // This allow us to have a truly random character from the selected characters for every iteration of the for loop until it reaches the desired length of the user password.
    let randomPassword = '';
    for (let i = 0; i < passwordLength; i++) {

        randomPassword += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));

    }
    return randomPassword;

}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);