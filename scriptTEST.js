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
 
    let specCharPrompt = confirm ("Do you want to include a special character? You must choose OK to generate safe password!");
        if (specCharPrompt===(true)){ 
        console.log("Thank you for choosing to include special character")}
        else {console.log("You did not choose special character, we are not able to generate safe password for you. Try again.");}

    let numCharPrompt = confirm ("Do you want to include a number? You must choose OK to generate safe password! ");
        if (numCharPrompt ===(true)){
          console.log("Thank you for choosing to include number")}
        else {console.log("You did not choose to include a number, we are not able to generate safe password for you. Try again."); }

    let lowCharPrompt = confirm ("Do yoconfirm to include a lower case letters? You must choose OK to generate safe password! ");
        if (lowCharPrompt ===(true)){
          console.log("Thank you for choosing to include lower case letter.")}
        else {console.log("You did not choose to include lower case letter, we are not able to generate safe password for you. Try again.");
        }

    let uppCharPrompt = confirm ("Do you want to include a capitalised letter? You must choose OK to generate safe password! ");
        if (uppCharPrompt===(true) ){          
          console.log("Thank you for choosing to include capitalised letter")}
        else {console.log("You did not choose to include a capitalised letter, we are not able to generate safe password for you. Try again.");
        }
   
  //plus sign in front of prompt turns the string into number
  // NEED TO CHECK FOR LETTER INPUT
    let passwlen = +prompt (" To choose length of your password type a number between 10-64");
//removed to test retur,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    let checkLength = function(){
          while (passwlen<10 || passwlen>64  )
          { passwlen= +prompt("your number is not the right length, please choose length between 10 and 64");
           }
        }
    checkLength(); 
//end of removed,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  // prints chosen number which is the chosen length:
   console.log((passwlen));
      
  //prints to console the answers array
    answers=[];
    answers.push(specCharPrompt, numCharPrompt, lowCharPrompt,uppCharPrompt, passwlen);
    console.log("---------"+answers+ ", "+ "----------------");
    return (answers);
};

//calling the function to get user answers
getPasswordOptions();


//finding if an array contains "false" and if yes then repeat prompts until all answers are true
//answers is an array(object)
let isThereFalse = answers.find(function(choice) {
  if(choice===false){
    confirm("You have not agreed to all required options, let's try again");
    getPasswordOptions()
    return
  }})
console.log ( "Collected users answers are: " + answers);


// Function for getting .chosen-length random elements from an array
let randomisedSelection=0;

function getRandom() {
  for (i=0; i<answers[4]; i++){
  randomisedSelection += allOptions [ Math.floor(Math.random() * allOptions.length)];
  }   
  return randomisedSelection
};
getRandom();
console.log ( "this is a string of random generated elements: " + randomisedSelection )

//inputing randomized string into array
const randomisedArray=Array.from(randomisedSelection);
console.log (randomisedArray);

//--------------------------------------------------------------------------------------------
//checking if string includes all required options
//using code from https://www.geeksforgeeks.org/how-to-find-if-two-arrays-contain-any-common-item-in-javascript/

function findCommon(par1,par2){
   return par1.some(item => par2.includes(item))
};

let specialTrue=(findCommon(randomisedArray, specialCharacters));
let numerTrue=(findCommon(randomisedArray, numericCharacters));
let lowCaseTrue=(findCommon(randomisedArray, lowerCasedCharacters));
let uppCaseTrue=(findCommon(randomisedArray, upperCasedCharacters));

console.log(specialTrue, numerTrue, lowCaseTrue, uppCaseTrue);


if (specialTrue && numerTrue && lowCaseTrue && uppCaseTrue){
  console.log("All required options are present in the string");
}
else {
  console.log("Option/s are missing. we need to run another randomisation");
  getRandom();
  
 }






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
