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

const middle = function(array) {
  array.sort(function(x, y) {return x - y;});
  let middleElement = Math.floor(array.length / 2);
  if (array.length <= 2) {
    console.log([]);
  } else if (array.length % 2 === 0) {
    console.log([array[middleElement - 1], array[middleElement]]);
  } else {
    console.log([array[middleElement]]);
  }
}
middle([1, 2, 3, 4]);

console.log(assertArraysEqual([1, 2, 4], [1, 2, 4]), false); 
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));