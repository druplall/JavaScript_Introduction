/* 
Return the indices of an array where the two distinct value equal the "target" 
*/

function twoSum(nums, target) {
  let indices = [];
  let isFound = false;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j <= nums.length - 1; j++) {
      if (nums[i] + nums[j] === target && isFound === false && i !== j) {
        indices.push(i);
        indices.push(j);
        isFound = true;
      }
    }
  }
  return indices;
  //   console.log(indices);
}

function twoSumAl(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length - 1; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
/* 
The better solution is to use a Map */

function twoSumOpt(nums, target) {
  const numMaps = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (numMaps.has(nums[i])) {
      return [i, numMaps.get(nums[i])];
    }
    numMaps.set(target - nums[i], i);
  }
}

// let results = twoSum([2, 7, 11, 15], 9);
// let results = twoSum([3, 2, 4], 6);
// let results = twoSum([3, 3], 6);
// let results = twoSumAl([2, 5, 5, 11], 10);
let results = twoSumOpt([2, 5, 5, 11], 10);
console.log(results);
