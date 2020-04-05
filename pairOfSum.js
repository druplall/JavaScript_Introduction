/* Problem 1
Given a list of non-negative integers and a target sum, 
find a pair of numbers that sums to the target sum.
*/

function findPairForSum(integers, target) {
  // your solution here
  let obj = {};

  for (let i = 0; i < integers.length; i++) {
    if (obj[i] === undefined) {
      obj[target - integers[i]] = integers[i];
      console.log(obj[target - integers[i]]);
    } else if (obj[i] + integers[i] === target) {
      // return [integers[i], obj[i]];
    }
  }
  console.log(obj);
  return obj;
}

// example
var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
//                          [6, ]

console.log(pair); // --> [4, 5]
