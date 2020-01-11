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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let character = sentence.charAt(i);
    if(character!==" "){
      if(results[character]){
        //existing key in the results
        results[character].push(i);
      } else{
        //existing key is not there
        results[character] = [i];
      }
    }
      
  }
  return results;
};
assertArraysEqual(letterPositions("hello").h, [0]);

console.log(assertArraysEqual([1, 2, 4], [1, 2, "4"]));
