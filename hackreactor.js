/* Instructions
First, declare a variable named myArray and assign it to an empty array.
Great! Now populate myArray with two strings. Put your full name in the first string, and your Skype handle in the second.
Next, declare a function named cutName. It should expect a parameter name.
cutName should return an array by breaking up the input string into individual words.
Example: cutName("Douglas Calhoun") should return ["Douglas", "Calhoun"]
Example: cutName("John B. Smith") should return ["John", "B.", "Smith"]

Declare a new variable named myInfo and assign it to an empty object literal.
Add the following three key-value pairs to myInfo:
Key: fullName, Value: The result of calling cutName on the name string within myArray.
Key: skype, Value: The Skype handle within myArray.
Key: github, Value: If you have a github handle, enter it here as a string. If not, set this to null instead. 
*/

let myArray = [];
myArray.push("Deodat Ruplall");
myArray.push("dr3068@skype.com");
let myInfo = {
  fullName: cutName("Deodat Ruplall"),
  skype: myArray[1],
  github: null
};

function cutName(name) {
  return (temArray = name.split(" "));
}
// console.log(cutName("Deodat Ruplall"));
console.log(myInfo["fullName"]);
console.log(myInfo["skype"]);
console.log(myInfo["github"]);
