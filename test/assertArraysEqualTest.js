const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

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


module.exports = assertArraysEqual;