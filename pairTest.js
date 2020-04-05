/* 
    Given a pair of non negative number and a target sum 
    Find a pair of number that sum to the target
 */

function findPair(array, target) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [array[i], array[j]];
      }
    }
  }
}

function findPairBetter(array, target) {
  let myMap = new Map();
  for (let i = 0; i < array.length; i++) {
    if (myMap.has(array[i])) {
      return [array[i], myMap.get(array[i])];
    }
    myMap.set(target - array[i], array[i]);
  }
}

//let pair = findPair([3, 34, 4, 12, 5, 2], 9);
let pair = findPairBetter([3, 34, 4, 12, 5, 2], 9);

console.log(pair);
//Answer: 4,5
