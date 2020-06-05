function findPairForSum(array, target) {
  // Store the target minus value into an object: difference is the key and value the index
  let myMap = new Map();

  //{
  // 6: 0
  //}
  for (let i = 0; i < array.length; i++) {
    if (myMap.has(array[i])) {
      return [array[i], myMap.get(array[i])];
    }
    myMap.set(target - array[i], array[i]);
  }
}

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // Answer [4,5]
