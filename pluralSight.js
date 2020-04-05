// Closures
// Allow us to hold onto variable results after they have gone out of scope, this is
// known as closures.

let greeting = (function () {
  let message = "hello";
  let getMessage = function () {
    return message;
  };
})();

//console.log(greeting.getMessage()); //Hello

// In order to get the greeting.getMessage() to not go out of scope we will need closures
let greetingClosure = (function () {
  let message = "Hello Closures";
  let getMessage = function () {
    return message;
  };
  return {
    getMessage: getMessage,
  };
})();

console.log(greetingClosure.getMessage());

// Another Closure Example:
function setupCounter(val) {
  return function counter() {
    return val++;
  };
}
let counter1 = setupCounter(0);
console.log(counter1);
console.log(counter1()); // 0
console.log(counter1()); // 1

// Immediately Invoked Function Expression (IIFE)
function greetingRegular() {
  console.log("Hello Regular");
}
greetingRegular();
// IIFE
(function () {
  console.log("Hello");
})(); // Opening and closing perantances and does not have a name

// Improving Readability with Arrow Functions

// Regular Function 1
let greetingReqularExpression = function () {
  return "Hello World! - Arrow Function Regular Test";
};
let message = greetingReqularExpression();
console.log(message);

let greetingArrow = () => {
  return "Hello World Arrow";
};

let message2 = greetingArrow();
console.log(message2);

//Test
