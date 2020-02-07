/* Absolute value of a number is the distance that the number is from zero on a number line, regardless
of if the number is above or below zero
*/

function abs(num) {
  if (num > 0) {
    return num;
  } else {
    return num * -1;
  }
}

function absVersion(num) {
  return num < 0 ? num * -1 : num;
  // If number is less than 0 then number * -1 else numb.
}

console.log(abs(30)); // 30
console.log(abs(-30)); // 30
console.log(abs(-2.3)); // 2.3

console.log(absVersion(-35)); // Print 35
console.log(absVersion(0)); // Zero
