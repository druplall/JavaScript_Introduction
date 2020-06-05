console.log(
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
  )
);

// [3] [4]

// INPUT: array, array of Object and function
// OUTPUT: array of array

function intersectWith(arr, arrObj, func) {
  let result = "";

  // Iterate over the arr
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arrObj.length; j++) {
      //console.log(func(arr[i], arrObj[j]));
      if (func(arr[i], arrObj[j])) {
        //result.push([arr[i]]);
        result = result.concat("[", arr[i], "]");
      }
    }
  }
  // Iteratr over the arrObj
  // call function with arr[i] and arrObj[j]

  return result;
}
