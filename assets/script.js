// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let promptLength = promptPasswordLength();
  let characters = generateCharacterPool();
  let password = generatePassword(promptLength, characters);
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generateCharacterPool() {
    let characters = '';
    characters += upperCase();
    characters += lowerCase();
    characters += numbers();
    characters += special();
    if (characters === '') {
        window.alert('You need to pick atleast one character type')
        return generateCharacterPool();
    }

    return characters;
    

}



function promptPasswordLength() {
    let promptLength = window.prompt('How many characters would you like in your password?');
    if (promptLength === '' || promptLength === null || isNaN(promptLength) || promptLength > 128 || promptLength < 8) {
        window.alert('Please enter number 8-128.');
        return promptPasswordLength();
    }


    return promptLength;
}


function upperCase() {
    let upperConfirm = window.confirm('Do you want uppercase letters?');
    if (upperConfirm) {
     return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';   
    }

    return '';
}

function lowerCase() {
    let lowerConfirm = window.confirm('Do you want lowercase letters?');
    if (lowerConfirm) {
        return 'abcdefghijklmnopqrstuvwxyz';
    }

    return '';
}

function numbers() {
    let numberConfirm = window.confirm('Do you want numbers?');
    if (numberConfirm) {
        return '0123456789';
    }

    return '';
}

function special() {
    let specialConfirm = window.confirm('Do you want symbols?');
    if (specialConfirm) {
        return '!@#$%^&*()';
    }

    return '';
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';


function generatePassword(passwordLength, characters) {
    
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      result = result + characters.charAt(Math.floor(Math.random() * characters.length) );  
    }

    return result;
}

