// Find the first and last elements of a sorted array
// Input: An Array of Sorted Numbers, and a target
// Output: Return the index of the first and last occurance
// if none is found return [-1,-1]

function firstAndLast(numbArray, target) {
  let results = [];

  // Iterate through number array
  for (let i = 0; i < numbArray.length; i++) {
    if (numbArray[i] === target) {
      results.push(i);
    }
  }

  if (results.length === 0) {
    return [-1, -1];
  } else {
    let temp = [];
    temp.push(results[0]);
    temp.push(results.pop());
    return temp;
  }
}

//console.log(firstAndLast([1,3,4,4,8], 4))

//console.log(firstAndLast([1,2,5,5,5,6,6,7,8,14], 5))
// Result = [2,4]

console.log(firstAndLast([3, 5, 6, 6, 7, 9], 8));
// Result = [-1,-1]
