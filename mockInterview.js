//Write a function 'getBirthday' which takes in an object with year, day, and month properties, and returns a string with the month and day separated by a space.

// Input: object
// Output: String with month and day with space

var getBirthday = function(obj) {
  //Your code here
  let result = "";

  // obj.month and obj.day
  result += obj.month + " " + obj.day;

  return result;
};

//Sample input:
var birthdayA = { year: 2010, day: 19, month: "September" };
var birthdayB = { year: 1950, day: 20, month: "December" };

//Sample function call with expected:
console.log(getBirthday(birthdayA)); //September 19
console.log(getBirthday(birthdayB)); //December 20

//Write a function which accepts an array of numbers and a target number. This function should return a new array of all numbers from the input array which are less than or equal to the input target number.

// Input: Number array
// Output: new array of numbers that less or equal too

var getNumbersLessThan = function(numbersArr, targetNum) {
  //Your code here
  let result = [];

  // iterative over elements
  for (let i = 0; i < numbersArr.length; i++) {
    if (numbersArr[i] <= targetNum) {
      result.push(numbersArr[i]);
    }
  }

  return result;
};

//Sample input:
var inputArray = [10, 22, 24, 19, 4, 25];
var inputTargetNumA = 22;
var inputTargetNumB = 10;

//Sample function call with expected:
console.log(getNumbersLessThan(inputArray, inputTargetNumA)); //[10, 22, 19, 4]
console.log(getNumbersLessThan(inputArray, inputTargetNumB)); //[10, 4]

var birthdayCollection = [
  { year: 1982, day: 10, month: "February" },
  { year: 1966, day: 22, month: "March" },
  { year: 2008, day: 19, month: "December" },
  { year: 1963, day: 3, month: "March" },
  { year: 2000, day: 7, month: "February" },
  { year: 1977, day: 18, month: "February" }
];

//You are asked by the head of Human Resources to compile a list of birthdays in a given month.
//Write a function which accepts an array with a structure similar to "birthdayCollection",
//as well as a month. Name this function "birthdaysInMonth";
//it should return an array of strings with a Month and Day separated by a space.

// Input: array of objects
// Output: Array of strings

var birthdaysInMonth = function(birthdayObjs, months) {
  //Your code here

  let result = [];

  // iterate over birthdayObj
  for (let i = 0; i < birthdayObjs.length; i++) {
    let obj = birthdayObjs[i];
    // if statement to check months
    if (obj.month === months) {
      result.push(months + " " + obj.day);
    }
  }

  return result;
};

//Result:
console.log(birthdaysInMonth(birthdayCollection, "February")); //[ 'February 10', 'February 7', 'February 18' ]
