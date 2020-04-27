//Deodat R.

// groupBy takes an array and splits it into sets, grouped by the
// result of running each value through the predicate. If the
// predicate is a string instead of a function, it groups by the
// property named by the predicate on each of the values.

function groupBy(collection, predicate) {
  let result = {};

  // Iterate over the collection array
  for (let i = 0; i < collection.length; i++) {
    if (typeof predicate === "function") {
      let key = predicate(collection[i]);
      let tempArray = [];
      tempArray.push(collection[i]);
      if (result[key] === undefined) {
        result[key] = tempArray;
      } else {
        //result[key] = tempArray.push(collection[i]);
        result[key].push(collection[i]);
      }
    }

    if (collection.hasOwnProperty(predicate)) {
      let key = collection[i].length;
      let tempArray = [];
      tempArray.push(collection[i]);
      if (result[key] === undefined) {
        result[key] = tempArray;
      } else {
        result[key].push(collection[i]);
      }
    }
  }
  // pass each element of index[i] into the predicate function
  // Insert into result key = predicate and value equal array of elements
  // Find already exist add push the array

  return result;
}

var firstLetter = function (word) {
  return word.charAt(0);
};

console.log(groupBy(["apple", "cat", "boat", "card", "bond"], firstLetter));
// returns { 'a': ['apple'], 'c': ['cat', 'card'], 'b': ['boat', 'bond'] }

console.log(groupBy(["apple", "cat", "boat", "card", "bond"], "length"));
// returns { '5': ['apple'], '3': ['cat'], '4': ['boat', 'card', 'bond'] }

console.log(
  groupBy([1.4, 5.6, 3.6, 1.8, 3.4], function (val) {
    return Math.floor(val);
  })
);

// {'1':[1.4, 1.8], '5': [5.6], '3':[3.6, 3.4]}
