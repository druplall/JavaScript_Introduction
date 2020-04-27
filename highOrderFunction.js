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

//let myArray = ["A", "B", "C"];
//console.log(addLetter("DEO"));
//let temp = map(myArray, addLetter);
//console.log(temp);
//console.log(map(myArray, addLetter("D")));

// Higher Order function the forEach

let arr = [1, 2, 3, 4, 5];
let result = arr.forEach((number, index) => {
  return (arr[index] = number * 2);
});

console.log(arr);

function forEach(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }

  return arr;
}

forEach(["one", "two", "three"], function (val, index, arr) {
  console.log(val, index, arr);
});
