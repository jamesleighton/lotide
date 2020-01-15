const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🔥🔥🔥 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

const findKey = function(restaurant, stars) {
  let keys = Object.keys(restaurant); 
   for (let key of keys) {
     if (stars === restaurant[key]) {
       return key;
     }
   } 
}//, x => x.stars === 2 // => "noma"
const rating = function() {

}

const restaurant = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

console.log(assertEqual(findKey("noma", 2), true));
//assertEqual(findKey(bestTVShowsByGenre, "That '70s Show"), undefined);