const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🔥🔥🔥 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "1", a: "2" };
const abc = { a: "1", b: "2", c: "3" };

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
    let keyArray1 = Object.keys(object1);
     for (let keys of keyArray1) {
       if (object1[keys] === object2[keys]) {
        return true;
      } else {
        return false;
    }
  }
};

const assertObjectsEqual = function (object1, object2) {
  const inspect = require('util').inspect; 
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
  for (let i = 0; i < object1.length; i++) {
    if (object1[i] !== object2[i]) {
      console.log(`💩💩💩 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
      return false;
    }
  }
   console.log(`🔥🔥🔥 Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  return true;
}
assertObjectsEqual(ab, ba);