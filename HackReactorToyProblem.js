// Input: string
// Output: strings are flipped between upper and lower case
// Process: Create two helper function,
// Determine if letter is lower case and return uppercase
// Determine if letter is upper case and return lowercase

function toggleCase(string) {
  // Create temp Array
  let tempString = [];
  // Return string
  let results = "";
  //split the string into array of char
  let stringArray = string.split("");
  //Iterate through array
  for (let i = 0; i < string.length; i++) {
    let tempLetter = stringArray[i];
    // Take one character at a time as check if they are lower or upper case
    if (isUpper(tempLetter)) {
      tempString.push(tempLetter.toLowerCase());
    } else if (isLower(tempLetter)) {
      tempString.push(tempLetter.toUpperCase());
    } else {
      tempString.push(tempLetter);
    }
  }

  results = tempString.join("");
  //console.log(results);
  return results;
}

function isUpper(letter) {
  //If char[i] ===.toUpperCase return true
  if (letter === letter.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

function isLower(letter) {
  //if char[i] === .tolowerCase return true
  if (letter === letter.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

//toggleCase('MaRio');
//toggleCase('PRP');
console.log(toggleCase("Good news, everyone!"), " (test)");

// Asseration
function asseration(acutal, expected) {
  if (acutal === expected) {
    return console.log("passed");
  } else {
    return console.log("Not again :(");
  }
}

asseration(toggleCase("Good news, everyone!"), "gOOD NEWS, EVERYONE!");

//Time Limit 45 minutes
// Write a function toggleCase which takes in a string and returns a new string where all the lowercase
// letters are changed to uppercase and all the uppercase letters are changed to lowercase.

// toggleCase('MaRio'); //'mArIO'
// toggleCase('PRP'); //'prp'
// toggleCase('Good news, everyone!'); //'gOOD NEWS, EVERYONE!'
