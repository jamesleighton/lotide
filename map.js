//const assertEqual = require('./assertEqual');

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🔥🔥🔥 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
   
   return true;
}

const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {
  
  console.log('array: ', array);
  console.log('callback: ', callback);
  
  const results = [];
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1, words);
eqArrays(results1, words);
assertEqual(results1, words);