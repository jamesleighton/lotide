const assertEqual = require('./assertEqual');

  const head = function(array) {
    return array[0];
  };


  //head();
  //console.log(head([5,6,7]);
  assertEqual(head([5,6,7]), 5) ;
  assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  

module.exports = head;