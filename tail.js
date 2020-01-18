;
const assertEqual = require('./assertEqual');

  const tail = function(array) {
    return array.slice(1);
  };
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  tail(words);
  assertEqual(words.length, 3);
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);


module.exports = tail;