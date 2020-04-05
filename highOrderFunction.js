// We want to create a high order function
// To be a high order function it must accept a function or return a function

// Implementation of the Array.map() Returns a copy of an array with whatever values was applies

function addLetter(string) {
  return (string = string.concat(string));
}

function map(array, addLetter) {
  let copy = [];
  for (let i = 0; i < array.length; i++) {
    // console.log(addLetter("D"));
    copy[i] = addLetter(myArray[i]);
  }
  return copy;
}

let myArray = ["A", "B", "C"];
//console.log(addLetter("DEO"));
let temp = map(myArray, addLetter);
console.log(temp);
//console.log(map(myArray, addLetter("D")));
