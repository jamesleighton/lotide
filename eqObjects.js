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
console.log(eqObjects(ab, ba));

assertEqual(eqObjects(ab, ba), true);
  
assertEqual(eqObjects(ab, abc), false);
