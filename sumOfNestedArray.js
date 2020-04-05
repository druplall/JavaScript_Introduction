/* 
    This	problem asks	you	to	sum	up	all	of	the	numbers	within	an	array,	
    but	the	array	may	also	contains	
    other	arrays	with	numbers.	This	is	what	we	call a	nested	array
    
    [1, 1, 1, [3, 4, [8]], [5]] 
*/

function findSum(param) {
  let results = 0;

  for (let i = 0; i < param.length; i++) {
    if (typeof param[i] !== "number") {
      results = results + findSum(param[i]);
    } else {
      results += param[i];
    }
  }
  return results;
}

let sum = findSum([1, 1, 1, [3, 4, [8]], [5]]);
console.log(sum);
