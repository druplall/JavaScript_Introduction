// Time Limit 45 minutes
// Write a function collectionConverter that takes an object or an array and returns a new collection in a different format (object to array or array to object).

// Input: Object or Array datatype
// Return: array or object based on the input

function collectionConverter(input) {
  // determine the inputted data type
  if (typeof input === "object" && !Array.isArray(input)) {
    // if Object type and not array [return will be an array]
    let resultArray = [];
    // iterate over the input object
    for (let keys in input) {
      resultArray.push(keys, input[keys]);
    }
    return resultArray;
  } else if (Array.isArray(input)) {
    // if array type [return will object type ]
    let resultObject = {};

    for (let i = 0; i < input.length; i += 2) {
      resultObject[input[i]] = input[i + 1];
    }
    return resultObject;
  } else {
    return;
  }
}

var arrZoo = [
  "zebra",
  4,
  "rhino",
  true,
  "monkeys",
  "many",
  "tiger",
  "siberian"
];
var objZoo = {
  zebra: 4,
  rhino: true,
  monkeys: "many",
  tiger: "siberian"
};
console.log(collectionConverter(arrZoo)); // { zebra: 4, rhino: true, monkeys: 'many' tiger: 'siberian'}
console.log("\n");
console.log(collectionConverter(objZoo)); // ['zebra', 4, 'rhino', true, 'monkeys', 'many', 'tiger', 'siberian']
