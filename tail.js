;
const newFunction = function() {
  const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log("🔥🔥🔥 Assertion Passed: " + actual + " === " + expected);
    } else {
      console.log("💩💩💩 Assertion Failed: " + actual + " !== " + expected);
    }
  };

  const tail = function(array) {
    return array.slice(1);
  };
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  tail(words);
  assertEqual(words.length, 3);
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);
};

// const tail = function(array) {
//   return array.slice(1);
// };
newFunction();

// const words = ["Yo Yo", "Lighthouse", "Labs"];
//tail(words);
// assertEqual(words.length, 3);

//module.exports = tail;