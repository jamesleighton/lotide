//const newFunction = function() {
  const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`🔥🔥🔥 Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);
  
//};
//newFunction();
//=========================================================

function countLetters(phrase) {
  let freq = {};
  for (let i = 0; i < phrase.length; i++) {
    let character = phrase.charAt(i);
      if (freq[character]) {
         freq[character]++;
      } else {
         freq[character] = 1;
      }
  }
  return freq;
};
console.log(countLetters("LHL"));


