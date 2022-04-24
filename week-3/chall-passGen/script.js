// Assignment code here
var charLength = 10;
var choiceArrey = [];
var specChar = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "~",
  "+",
  "=",
  ";",
  "/",
  "?",
  "<",
  ">",
  ",",
  "'",
];
var lcLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var ucLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//----------------FUNCTION writePassword---------------------//
// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var password = generatePassword();
    passwordText.value = password;
  } else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//----------------FUNCTION GENERATEPASSWORD---------------------//
function generatePassword() {
  var genPass = "";
  for (var i = 0; i < charLength; i++) {
    var randomLetter = Math.floor(Math.random() * choiceArrey.length);
    genPass = genPass + choiceArrey[randomLetter];
  }
  return genPass;
}

//----------------FUNCTION getPrompts----------------------------//
function getPrompts() {
  choiceArrey = [];

  charLength = parseInt(
    prompt(
      "How many characters do you want the password top be? (8 - 128 characters)"
    )
  );

  if (isNaN(charLength) || charLength < 8 || charLength > 128) {
    alert(
      "Character length has to be a number between 8 and 128. Please try again!"
    );
    return false;
  }

  if (confirm("Would you like Special Characters in your password")) {
    choiceArrey = choiceArrey.concat(specChar);
  }

  if (confirm("Would you like LowerCase Letters in your password")) {
    choiceArrey = choiceArrey.concat(lcLetters);
  }

  if (confirm("Would you like UpperCase Letters in your password")) {
    choiceArrey = choiceArrey.concat(ucLetters);
  }

  if (confirm("Would you like NUMBERS in your password")) {
    choiceArrey = choiceArrey.concat(numbers);
  }
  return true;
}
