// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// creating array with all possible options to use for password
var allOptions = [...specialCharacters,...numericCharacters,...lowerCasedCharacters,...upperCasedCharacters];
//console.log(allOptions);


// Function to prompt user for password options
function getPasswordOptions() {
 
    let specCharPrompt = confirm ("Do you want to include a special character? You must choose OK to generate safe password!");
       
    let numCharPrompt = confirm ("Do you want to include a number? You must choose OK to generate safe password! ");
       
    let lowCharPrompt = confirm ("Do yoconfirm to include a lower case letters? You must choose OK to generate safe password! ");
      
    let uppCharPrompt = confirm ("Do you want to include a capitalised letter? You must choose OK to generate safe password! ");
       
    let passwlen = +prompt (" To choose length of your password type a number between 10-64");
    let checkLength = function(){
          while (passwlen<10 || passwlen>64  )
          { passwlen= +prompt("your number is not the right length, please choose length between 10 and 64");
           }
        }
    checkLength(); 
    answers=[];
    answers.push(specCharPrompt, numCharPrompt, lowCharPrompt,uppCharPrompt, passwlen);
    return (answers);
};
getPasswordOptions();


//finding if an array contains "false" and if yes then repeat prompts until all aswers are true
//answers is an array(object)
let isThereFalse = answers.find(function(choice) {
  if(choice===false){
    prompt("You have not agreed to all required options, let's try again");
    getPasswordOptions();
    return
  }})
 


// Function for getting .chosen-length random elements from an array
let randomisedSelection=0;
function getRandom() {
  for (i=0; i<answers[4]; i++){
  randomisedSelection += allOptions [ Math.floor(Math.random() * allOptions.length)];
  }   
};
getRandom();
console.log ( "this is a string of random generated elements: " + randomisedSelection )

//inputting randomized string into array
const randomisedArray=Array.from(randomisedSelection);
console.log (randomisedArray);

//--------------------------------------------------------------------------------------------
//checking if string includes all required options
//I have 2 arrays randomisedArray and specialCharacters
//using code from https://www.geeksforgeeks.org/how-to-find-if-two-arrays-contain-any-common-item-in-javascript/

function findCommon(randomisedArray,specialCharacters){
   return randomisedArray.some(item => specialCharacters.includes(item))
};
function findCommon(randomisedArray, numericCharacters){
  return randomisedArray.some(item => numericCharacters.includes(item))
   
};
function findCommon(randomisedArray,lowerCasedCharacters){
  return randomisedArray.some(item => lowerCasedCharacters.includes(item))
};
function findCommon(randomisedArray,upperCasedCharacters){
  return randomisedArray.some(item => upperCasedCharacters.includes(item))
};
/*
console.log(findCommon(randomisedArray, specialCharacters));
console.log(findCommon(randomisedArray, numericCharacters));
console.log(findCommon(randomisedArray, lowerCasedCharacters));
console.log(findCommon(randomisedArray, upperCasedCharacters));
*/
let specialTrue=(findCommon(randomisedArray, specialCharacters));
let numerTrue=(findCommon(randomisedArray, numericCharacters));
let lowCaseTrue=(findCommon(randomisedArray, lowerCasedCharacters));
let uppCaseTrue=(findCommon(randomisedArray, upperCasedCharacters));
console.log(specialTrue);
console.log(numerTrue);
console.log(lowCaseTrue);
console.log(uppCaseTrue);

if (specialTrue=numerTrue=lowCaseTrue=uppCaseTrue){
  console.log("aoighieotyeoiatyoiaygaioguipadjgaepirgjpeagjpeagutep");
} else {
  console.log("oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAutep");
}
getRandom();



//===========================================================================================
// Function to generate password with user input
function generatePassword() {

let password="xfgdgsgyz"
return password;

}


//code below is already prepared
                      // Get references to the #generate element
                      var generateBtn = document.querySelector('#generate');

                      // Write password to the #password input
                      function writePassword() {
                        var password = generatePassword();
                        var passwordText = document.querySelector('#password');

                        passwordText.value = password;
                      }

                      // Add event listener to generate button
                      generateBtn.addEventListener('click', writePassword);
//code above is already prepared
