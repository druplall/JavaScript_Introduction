function mult(x) {
  return function (c) {
    return x * c;
  };
}

var multpliy = mult(5);
console.log(multpliy(2));

// var arr = [1, 3, 16, 22, 31, 33, 34];
// var result = binarySearch(arr, 31);
// console.log(result); //--> 4

// function binarySearch(arr, target) {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start <= end) {
//     let mid = Math.floor(start + end / 2);
//     if (arr[mid] === target) {
//       console.log("found it");
//     }

//     if (arr[mid] > target) {
//       start = mid + 1;
//     }

//     if (arr[mid] < target) {
//       end = mid - 1;
//     }
//   }
// }

// var currentInventory = [
//   {
//     name: "Brunello Cucinelli",
//     shoes: [
//       { name: "tasselled black low-top lace-up", price: 1000 },
//       { name: "tasselled green low-top lace-up", price: 1100 },
//       { name: "plain beige suede moccasin", price: 950 },
//       { name: "plain olive suede moccasin", price: 1050 },
//     ],
//   },
//   {
//     name: "Gucci",
//     shoes: [
//       { name: "red leather laced sneakers", price: 800 },
//       { name: "black leather laced sneakers", price: 900 },
//     ],
//   },
// ];

// // INPUT: An array of objects
// // OUTPUT: An array of object. (Need to find all the sentence with the word lace)

// function generateLaceDetails(inventory) {
//   // your code here
//   let result = [];

//   for (let i = 0; i < inventory.length; i++) {
//     let shoeArray = inventory[i].shoes;
//     for (let j = 0; j < shoeArray.length; j++) {
//       //console.log(shoeArray[j]);
//       // if (j === 0) {
//       //   console.log(filter(shoeArray[j].name, "lace"));
//       // }
//       let temp = filter(shoeArray[j].name, "lace");
//       if (temp.nameWords.length !== 0) {
//         result.push(temp);
//       }
//     }
//   }

//   return result;
//   //console.log(resultObj);
// }
// // Will receive a string input and the keyword.
// function filter(stringSentence, keyWord) {
//   let resultObj = {
//     nameWords: [],
//     targetWordIndex: 0,
//   };
//   if (stringSentence.includes(keyWord)) {
//     let temp = stringSentence.split(" ");
//     //console.log("test");
//     //temp.forEach((elem) => resultObj.nameWords.push(elem));
//     temp.forEach(function (elem, index) {
//       resultObj.nameWords.push(elem);
//       //console.log(elem[index].indexOf(keyWord));
//     });
//   }

//   return resultObj;
// }

// console.log(generateLaceDetails(currentInventory));

// var expectedResult = [
//   {
//     nameWords: ["tasselled", "black", "low-top", "lace-up"],
//     targetWordIndex: 3,
//   },
//   {
//     nameWords: ["tasselled", "green", "low-top", "lace-up"],
//     targetWordIndex: 3,
//   },
//   {
//     nameWords: ["red", "leather", "laced", "sneakers"],
//     targetWordIndex: 2,
//   },
//   {
//     nameWords: ["black", "leather", "laced", "sneakers"],
//     targetWordIndex: 2,
//   },
// ];

// // let blackWinner = checkWinner([
// //   "black",
// //   "red",
// //   "black",
// //   "black",
// //   "black",
// //   "black",
// //   "red",
// // ]);
// // console.log(blackWinner); //-> 'Black Wins!'

// // let redWinner = checkWinner([0, 0, 0, "red", "red", "red", "red"]);
// // console.log(redWinner); //-> 'Red Wins!'

// // let draw = checkWinner(["red", "red", "red", "black", "red", "black", 0]);
// // console.log(draw); // -> 'Draw!'
// // // please complete the challenge according to the instructions
// // // Input: An array of 7 length
// // // Output: If 4 conssitive value return that plus WinS!. If not return drwa

// // function checkWinner(array) {
// //   let obj = {};
// //   let counter = 1;

// //   for (let i = 0; i < array.length - 1; i++) {
// //     if (obj[array[i]] === undefined) {
// //       obj[array[i]] = counter;
// //       if (helper(array[i], array[i + 1])) {
// //         obj[array[i]]++;
// //         //console.log(obj[array[i]]);
// //       }
// //     } else {
// //       console.log(obj[array[i]]);
// //       if (helper(array[i], array[i + 1])) {
// //         obj[array[i]]++;
// //       }
// //     }
// //   }

// //   for (let key in obj) {
// //     //console.log(`The key is: ${key} and value is: ${obj[key]}`);
// //     if (obj[key] === 4) {
// //       return (
// //         key.charAt(0).toUpperCase() + key.substring(1, key.length) + " Wins!"
// //       );
// //     }
// //   }

// //   return "Draw!";
// // }

// // function helper(x, y) {
// //   if (x === y) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }

// // // var users = [
// // //   {
// // //     id: 1,
// // //     name: "Leanne Graham",
// // //     username: "Bret",
// // //     email: "Sincere@april.biz",
// // //     address: {
// // //       street: "Kulas Light",
// // //       suite: "Apt. 556",
// // //       city: "Gwenborough",
// // //       zipcode: "92998-3874",
// // //       geo: {
// // //         lat: "-37.3159",
// // //         lng: "81.1496",
// // //       },
// // //     },
// // //     phone: "1-770-736-8031 x56442",
// // //     website: "hildegard.org",
// // //     company: {
// // //       name: "Romaguera-Crona",
// // //       catchPhrase: "Multi-layered client-server neural-net",
// // //       bs: "harness real-time e-markets",
// // //     },
// // //   },
// // //   {
// // //     id: 2,
// // //     name: "Ervin Howell",
// // //     username: "Antonette",
// // //     email: "Shanna@melissa.tv",
// // //     address: {
// // //       street: "Victor Plains",
// // //       suite: "Suite 879",
// // //       city: "Wisokyburgh",
// // //       zipcode: "90566-7771",
// // //       geo: {
// // //         lat: "-43.9509",
// // //         lng: "-34.4618",
// // //       },
// // //     },
// // //     phone: "010-692-6593 x09125",
// // //     website: "anastasia.net",
// // //     company: {
// // //       name: "Deckow-Crist",
// // //       catchPhrase: "Proactive didactic contingency",
// // //       bs: "synergize scalable supply-chains",
// // //     },
// // //   },
// // // ];

// // // // write both functions from scratch
// // // // If the value of the id property is even, your function should create a new string for the given user, add the street, suite, city, and zipcode, each separated by a space and a comma, as one string, to the return array

// // // // generateSampleView
// // // function generateSampleView(arrObj) {
// // //   let result = [];

// // //   for (let i = 0; i < arrObj.length; i++) {
// // //     let id = arrObj[i].id;
// // //     if (id % 2 !== 0) {
// // //       result.push(arrObj[i].email);
// // //     } else {
// // //       let address = arrObj[i].address;
// // //       let userInfo = address.street;
// // //       //userInfo.concat("")
// // //       userInfo = userInfo.concat(", ", address.suite);
// // //       userInfo = userInfo.concat(", ", address.city);
// // //       userInfo = userInfo.concat(", ", address.zipcode);
// // //       result.push(userInfo);
// // //     }
// // //   }

// // //   return result;
// // // }

// // // console.log(generateSampleView(users));

// // // // assertArraysEqual

// // // // let output_0 = sumAltitudeDeltas([1, 2, 3, 1], 0, 3);
// // // // console.log(output_0); //--> 6

// // // // let output_1 = sumAltitudeDeltas([5, 3, 6, 7, 2], 2, 4);
// // // // console.log(output_1); //--> 7

// // // // let output_2 = sumAltitudeDeltas([5, 3, 6, 7, 2], 0, 1);
// // // // console.log(output_2); //--> 2

// // // // let output_3 = sumAltitudeDeltas([5, 3, 6, 7, 2], 0, 4);
// // // // console.log(output_3); //--> 15

// // // // let output_4 = sumAltitudeDeltas([4, 1, 4, 0, 20, 13], 1, 4);
// // // // console.log(output_4); //--> 50

// // // // function sumAltitudeDeltas(arr, start, end) {
// // // //   let sum = 0;

// // // //   for (let i = start; i < end; i++) {
// // // //     let delta = arr[i + 1] - arr[i];
// // // //     if (delta > 0) {
// // // //       sum += delta * 2;
// // // //     } else {
// // // //       sum -= delta;
// // // //     }
// // // //   }

// // // //   return sum;
// // // // }

// // // // Example:
// // // // var obj1 = { key1: "something" };
// // // // var obj2 = { key2: "something new" };
// // // //   _.extend(obj1, {
// // // //     key2: "something new",
// // // //     key3: "something else new"
// // // //   }, {
// // // //     bla: "even more stuff"
// // // //   }); // obj1 now contains key1, key2, key3 and bla

// // // // function extents(obj) {
// // // //   for (let i = 1; i < arguments.length; i++) {
// // // //     for (let key in arguments[i]) {
// // // //       console.log(key);
// // // //       console.log(arguments[i][key]);
// // // //       obj[key] = arguments[i][key];
// // // //     }
// // // //   }

// // // //   return obj;
// // // // }

// // // // console.log(extents(obj1, obj2));

// // // // function getDomain(url) {
// // // //   // your code here
// // // //   let temp = url.split("");
// // // //   let domain = 0;
// // // //   let domainEnd = 0;
// // // //   for (let i = 0; i < temp.length; i++) {
// // // //     if (temp[i] === "/" && temp[i + 1] === "/") {
// // // //       domain = i + 2;
// // // //     }
// // // //     if (temp[i] === ".") {
// // // //       domainEnd = i;
// // // //     }
// // // //   }
// // // //   return url.substring(domain, domainEnd);
// // // // }

// // // // console.log(getDomain("http://github.com/carbonfive/raygun"));

// // // // function splitPairs(input) {
// // // //   // your code here
// // // //   let result = [];
// // // //   if (input === "") {
// // // //     return [];
// // // //   }

// // // //   let temp = input.split("");
// // // //   if (temp.length % 2 !== 0) {
// // // //     temp.push("_");
// // // //   }

// // // //   for (let i = 0; i < temp.length; i = i + 2) {
// // // //     result.push(temp[i].concat(temp[i + 1]));
// // // //   }
// // // //   //console.log(temp);
// // // //   return result;
// // // // }

// // // // console.log(splitPairs("Deoda"));
