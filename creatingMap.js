var bdays = ["08-14", "10-04", "04-21"];

// we want a new array where the birthdays will be in the format: MM/DD
// the elem parameter will be each element from the original array
// var bdays2 = bdays.map(function (elem) {
//   return elem.replace("-", "/");
// });

var each = function (collection, func) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      func(collection[i], i, collection);
    }
  } else {
    for (let key in collection) {
      func(collection[key], key, collection);
    }
  }
};

var map = function (collection, fun) {
  let result = [];

  each(collection, function (elem) {
    result.push(fun(elem));
  });

  return result;
};

//map({ t: 1, b: 4 }, {});
var bdays2 = map(bdays, function (elem) {
  return elem.replace("-", "/");
});

// we want a new array where the birthdays will be in the format: MM/DD
// the elem parameter will be each element from the original array
// var bdays2 = bdays.map(function (elem) {
//   return elem.replace("-", "/");
// });

console.log(bdays2); // => ['08/14', '10/04', '04/21']
