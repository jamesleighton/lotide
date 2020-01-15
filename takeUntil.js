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

const assertArraysEqual = function (hello1, hello2) {
  if (hello1.length !== hello2.length) {
    return false;
  }
  for (let i = 0; i < hello1.length; i++) {
    if (hello1[i] !== hello2[i]) {
      return false;
    }
  }
   
   return true;
}

const takeUntil = function(array, callback) {
  let result = [];
  for (let i of array) {
    if (!callback(i)) {
      result.push(i);
    } else {
      break;
    }
  }return result;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(console.log(results2));