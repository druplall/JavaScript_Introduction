// This	problem asks	you	to	sum	up	all	of	the	numbers	within	an	array,	but	the	array	may	also	contains
// other	arrays	with	numbers.	This	is	what	we	call a	nested	array. For	example:
// [1, 1, 1
// , [3, 4, [8]]
//, [5]]

// Input: An array that could be nested
// Output: return sum

function sumArr(array) {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number") {
      result += sumArr(array[i]);
    } else {
      result += array[i];
    }
  }

  return result;
}

console.log(sumArr([1, 1, 1, [3, 4, [8]], [5]]));
