var difference = reduce([1, 2, 3], function (memo, item) {
  return memo - item;
}); // -4

console.log(difference);

var sum = reduce([1, 2, 3], function (memo, num) {
  return memo + num;
}); // 6

console.log(sum);

var difference1 = reduce(
  [1, 2, 3],
  function (memo, item) {
    return memo - item;
  },
  10
); // 4

console.log(difference1);

// Input: Array and function

// Output: number

function reduce(collection, func, accum) {
  // check if accum is null

  if (accum === undefined) {
    let result = collection[0];

    // iterate over the collection

    for (let i = 1; i < collection.length; i++) {
      // call func on each element of the array and pass the result for sum

      result = func(result, collection[i]);
    }

    return result;
  } else {
    //else

    // var Result (int)

    let result = accum;

    // iterate over the collection

    for (let i = 0; i < collection.length; i++) {
      // call func on each element of the array and pass the result for sum

      result = func(result, collection[i]);
    }

    // return result

    return result;
  }
}

charCount("mississippi");

//=> [['m', 1], ['i', 4], ['s', 4], ['p', 2]]

// Input: string

// Output: Array of Array element -- [0=letter, 1=count]

function charCount(word) {
  let resultArray = [];

  let obj = {};

  let counter = 1;

  //Spit word into char array

  let wordArray = word.split("");

  // iterate over the wordArray

  for (let i = 0; i < wordArray.length; i++) {
    // If wordArray[i] does not exit, insert.

    if (obj[wordArray[i]] === undefined) {
      obj[wordArray[i]] = counter;
    } else {
      obj[wordArray[i]]++;
    }
  }

  //console.log(obj)

  // If wordArray[i] does not exit, insert.

  //else increment count]

  // iterate over object

  for (let key in obj) {
    // let temp = [];

    // temp.push(key);

    // temp.push(obj[key]);

    resultArray.push([key, obj[key]]);
  }

  // insert key = index 0 value at 1

  return resultArray;
}

intersectWith(
  [1, 2, 3, 4],
  [
    {
      id: 3,
    },

    {
      id: 4,
    },
  ],

  function (a, b) {
    return a == b.id;
  }
);

// [3] [4]

// Input: Array, Object and function

// Output: Array

function intersectWith(arr, arrObj, func) {
  let result = [];

  // iterate over the first array

  for (let i = 0; i < arr.length; i++) {
    // iterate over the object array

    for (let j = 0; j < arrObj.length; j++) {
      let obId = arrObj[j];

      // console.log(obId)

      // check func on firstArray[i] and objectArray

      if (func(arr[i], obId)) {
        result.push(arr[i]);
      }
    }
  }

  // check func on firstArray[i] and objectArray

  return result;
}

var multiplyByFive = multiply(5);

var result1 = multiplyByFive(10); //50

var result2 = multiplyByFive(5); //25
