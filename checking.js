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

function reduce(collection, func, iter) {
  if (iter === undefined) {
    // let result = collection[0];
    let result = collection[0];
    collection.forEach(function (elem, index) {
      result = func(result, elem);
    });
    // for(let i = 1; i < collection.length; i++){
    //   result = func(result, collection[i]);
    // }
    return result;
  } else {
    let results = iter;
    collection.forEach(function (element) {
      // results = func(results,collection[i]);
      results = func(results, element);
    });
    // for(let i = 0 ; i < collection.length; i++ ){
    //   results = func(results,collection[i]);
    // }
    return results;
  }
}

console.log(
  reduce([1, 2, 3, 4], function (a, b) {
    return a + b;
  }) // 10
);

console.log(
  reduce(
    [1, 2, 3, 4],
    function (a, b) {
      return a + b;
    },
    5
  ) // 15
);

console.log(
  reduce(
    [1, 2, 3, 4],
    function (a, b) {
      return "" + a + b;
    },
    5
  ) // "51234"
);

console.log(
  reduce([1, 2, 3, 4], function (a, b) {
    return "" + a + b;
  }) // "1234"
);

console.log(
  reduce(
    [1, 2, 3, 4],
    function (a, b) {
      a[b] = true;
      return a;
    },
    {}
  ) // {1: true, 2: true, 3: true, 4: true}
);
