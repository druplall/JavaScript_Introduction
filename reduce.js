/*
Define the higher order function "reduce" so that
this invocation produces the intended output:

reduce([1, 2, 3, 4], function(a, b) {
    return a + b
}) // 10
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
console.log(
  reduce(
    [1, 2, 3, 4],
    function (a, b) {
      return a + b;
    },
    5
  ) // 15
);

// INPUT: array, function
// Output: result
function reduce(array, func, start) {
  let result;
  if (arguments[2] === undefined) {
    result = array[0];
  } else {
    result = start;
  }

  for (let i = 0; i < array.length; i++) {
    result = func(result, array[i]);
  }

  return result;
}
