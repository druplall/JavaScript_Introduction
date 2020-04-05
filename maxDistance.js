/* 
    Given a string, write a function that finds the positions of the matching characters 
    with the greatest distance between them. For example, given ‘abcacdb’, 
    the answer would be [1, 6] for the letter ‘b’. 
*/

function findDistance(param) {
  let distance = 0;
  let pair = [];
  for (let i = 0; i < param.length - 1; i++) {
    for (let j = i + 1; j < param.length; j++) {
      if (param[i] === param[j] && j - i > distance) {
        distance = j - i;
        //console.log(param[i] + " the distance is : " + distance);
        pair.push(i, j);
      }
    }
  }
  return pair.pop();
  console.log(pair);
}

function findDistanceOpt(param) {}

let test = "abcacdb";
//answer [1,6] for letter b
console.log(findDistance(test));
