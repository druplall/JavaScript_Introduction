// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(strng) {
  // return incrementedString
  if (strng === "") {
    return 1;
  }

  let res = strng.replace(/\D/g, "");
  //res = Number(res);
  //console.log(res);
  // res = res++;
  //console.log(res);

  let tempString = strng.substring(0, strng.length - res.length);
  //let result = tempString.concat("", res);
  //console.log(result);
  return tempString.concat("", res);
}

console.log(incrementString("foobar0001"));
