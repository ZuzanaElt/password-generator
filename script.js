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

// creating array with all possible options available to  be used for password
var allOptions = [...specialCharacters,...numericCharacters,...lowerCasedCharacters,...upperCasedCharacters];
//console.log(allOptions);


// Function to prompt user for password options
function getPasswordOptions() {
 
    let specCharPrompt = confirm ("Do you want to include a special character? \nYou must choose OK to generate a safe password!");

    let numCharPrompt = confirm ("Do you want to include a number? \nYou MUST choose 'OK' to generate a safe password! ");
       

    let lowCharPrompt = confirm ("Do you want to include a lower-case letter? You MUST choose 'OK' to generate a safe password! ");
       
    let uppCharPrompt = confirm ("Do you want to include a capitalised letter? \nYou MUST choose 'OK' to generate a safe password! ");
  
   
   //plus sign in front of prompt turns the string into number
    let passwlen = prompt (" To choose length of your password type a number between 10-64");

    let checkLength = function(){
         while ((passwlen<10 || passwlen>64 ) || passwlen.match (/[^0-9]/))
            { passwlen= prompt("Your chosen number is not acceptable, please choose only numerals and length between 10 and 64");
            }
    }
    checkLength(); 

    answers=[];
    answers.push(specCharPrompt, numCharPrompt, lowCharPrompt,uppCharPrompt, passwlen);
    return (answers);
};

getPasswordOptions();

//finding if the array 'answers' contains 'false' and if yes then repeat the function(confirmations) until all answers are 'true'
let isThereFalse = answers.find(function(choice) {
  if(choice===false){
    confirm("You have not agreed to all required options, let's try again");
    getPasswordOptions()
    return
  }})

// Function for getting .chosen-length number of random elements from the 'allOptions' array
let randomisedSelection="";

function getRandom() {
  for (i=0; i<answers[4]; i++){
  randomisedSelection += allOptions [ Math.floor(Math.random() * allOptions.length)]
  
  }   
  return randomisedSelection
};
getRandom();

console.log(randomisedSelection);
//inputing the randomized string into new array
const randomisedArray=Array.from(randomisedSelection);


//checking if string includes all required options
//using code from https://www.geeksforgeeks.org/how-to-find-if-two-arrays-contain-any-common-item-in-javascript/
function findCommon(par1,par2){
   return par1.some(item => par2.includes(item))
};

let specialTrue=(findCommon(randomisedArray, specialCharacters));
let numerTrue=(findCommon(randomisedArray, numericCharacters));
let lowCaseTrue=(findCommon(randomisedArray, lowerCasedCharacters));
let uppCaseTrue=(findCommon(randomisedArray, upperCasedCharacters));

// to view the randomised string in console: console.log(randomisedSelection)

if (specialTrue && numerTrue && lowCaseTrue && uppCaseTrue){
  console.log("All required options are present in the string");
}
else {
  console.log("Option/s are missing. We need to run another randomisation. Please, refresh your page.");
  ;
 }

 confirm ( "Here is your random generated password: " + randomisedSelection +". To display it in html window press the 'Generate Password' button. " );

// Function to generate password with user input
function generatePassword() {
return randomisedSelection;
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
