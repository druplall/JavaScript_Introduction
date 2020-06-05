//=> [['m', 1], ['i', 4], ['s', 4], ['p', 2]]

// Input: A string
// Output: An Array of array

// const charCount = (word) => {
//   let obj = {};

//   // iterate over the word and insert the index as the key. If not undefine it exist so incerement
//   for (let i = 0; i < word.length; i++) {
//     if (obj[word[i]] === undefined) {
//       obj[word[i]] = 1;
//     } else {
//       obj[word[i]] += 1;
//     }
//   }
//   //console.log(obj);
//   let result = [];
//   for (let key in obj) {
//     result.push([key, obj[key]]);
//   }

//   console.log(result);
// };

// charCount("mississippi");

// const reduce = function (collection, func) {
//   let result;
//   if (arguments[2] === undefined) {
//     let result = collection[0];
//   } else {
//     result = arguments[2];
//   }

//   // collection.forEach(function (elem) {
//   //   result = func(result, elem);
//   // });
//   for (let i = 0; i < collection.length; i++) {
//     result = func(result, collection[i]);
//     console.log(`logging: ${i}: ${result}`);
//   }

//   return result;
// };

// console.log(
//   reduce([1, 2, 3, 4], function (a, b) {
//     return "" + a + b;
//   }) // "1234"
// ); // 10

/*
Define the higher order function "reduce" so that
this invocation produces the intended output:



reduce([1, 2, 3, 4], function(a, b) {
    return a + b
}, 5) // 15

reduce([1, 2, 3, 4], function(a, b) {
    return '' + a + b
}, 5) // "51234"

reduce([1, 2, 3, 4], function(a, b) {
    return '' + a + b
}) // "1234"

reduce([1, 2, 3, 4], function(a, b) {
    a[b] = true
    return a
}, {}) // {1: true, 2: true, 3: true, 4: true}

*/

//Deodat R.

// groupBy takes an array and splits it into sets, grouped by the
// result of running each value through the predicate. If the
// predicate is a string instead of a function, it groups by the
// property named by the predicate on each of the values.
var firstLetter = function (word) {
  return word.charAt(0);
};

function groupBy(arr, test) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let tempArray = [];
    if (obj[firstLetter(arr[i])] === undefined) {
      obj[firstLetter(arr[i])] = arr[i];
    }
  }

  return obj;
}

console.log(groupBy(["apple", "cat", "boat", "card", "bond"], firstLetter));
// returns { 'a': ['apple'], 'c': ['cat', 'card'], 'b': ['boat', 'bond'] }

// console.log(groupBy(["apple", "cat", "boat", "card", "bond"], "length"));
// returns { '5': ['apple'], '3': ['cat'], '4': ['boat', 'card', 'bond'] }

console.log(
  groupBy([1.4, 5.6, 3.6, 1.8, 3.4], function (val) {
    return Math.floor(val);
  })
);

// {'1':[1.4, 1.8], '5': [5.6], '3':[3.6, 3.4]}

//Input: Array and arg (could be function or string)
// Output: An object with the result of the predicate as the key;

function filter_list(l) {
  // Return a new array with the strings filtered out
  let result = [];

  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === "number") {
      result.push(l[i]);
    }
  }

  return result;
}

function filter_list(l) {
  return l.filter(Number.isInteger);
}
