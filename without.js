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
  //=============================================
const without = function(source, itemsToRemove ) {  
  let newArray = source;
  for (let i = 0; i < itemsToRemove.length; i++) {
    let charToRemove = itemsToRemove[i];
    for (let j = 0; j < source.length; j++) {
      
      if(charToRemove===source[j]){
        newArray.splice(newArray.indexOf(charToRemove),1);
        break;
      }

    }
    console.log("new Array",newArray);
  }
  return newArray;
}
    //if (source[i] !== itemsToRemove[i]) {

//console.log(without([1, 2, 3], [2]));
console.log(without([1, 2, 3, 4, 20, 4, 5], [20,4]));
//console.log(without([1, 2, 3, 4, 20, 4, 5], [20,4,2,3]));


const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
//Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);