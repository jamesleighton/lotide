;
const assertEqual = require('./assertEqual');

  const tail = function(array) {
    return array.slice(1);
  };
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  console.log(tail(words));
  assertEqual(1, 1);


module.exports = tail;