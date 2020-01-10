const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🔥🔥🔥 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

const findKeyByValue = function(bestTVShowsByGenre, title) {
   //for (let keys of bestTVShowsByGenre) {
  let keyArray = Object.keys(bestTVShowsByGenre); 

    for (let keys of keyArray) {
      if (title === bestTVShowsByGenre[keys]) {
        return keys;
      }
    } 
}
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);