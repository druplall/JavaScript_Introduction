function maxWater(height) {
  let largest = height[0];
  let secondLargest;
  let indicesLarges;
  for (let i = 1; i < height.length - 1; i++) {
    if (largest < height[i]) {
      secondLargest = largest;
      largest = height[i];
      indicesLarges = i;
    }
  }
  let secondIndices;
  for (let i = 0; i < height.length; i++) {
    if (secondLargest === height[i]) {
      secondIndices = i;
    }
  }
  //console.log(secondLargest, largest);
  //console.log(indicesLarges, secondIndices);
  return secondLargest * (indicesLarges - secondIndices);
}

function maxWaterBrut(height) {
  let maxArea = 0;
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let area = Math.min(height[i], height[j]) * (j - i);
      console.log(area);
      if (area > maxArea) {
        maxArea = area;
      }
    }
  }
  return maxArea;
}

let results = maxWater([2, 5, 2, 6, 1]);
//let results = maxWater([1, 8, 6, 2, 5, 4, 8, 3, 7]);
//Should be 49;
console.log(results);
//Should be ten

// Water container challenge: Find the pair of elements that contain the max amount of water

//Input: NumberArray
//Output: number

function maxArea(numArray) {
  let maxArea = 0;

  // Start and the front of the array
  let i = 0;
  // Start at the end of the array
  let j = numArray.length - 1;
  // Iterate through the array and calculate the area
  while (i !== j) {
    // Area is L * W
    let area = Math.min(numArray[i], numArray[j]) * (j - i);
    if (area > maxArea) {
      maxArea = area;
    }
    if (numArray[j] > numArray[i]) {
      i++;
    } else {
      j--;
    }
  }

  return maxArea;
}

console.log(maxArea([2, 5, 2, 6, 1]));
// Result to be 10
