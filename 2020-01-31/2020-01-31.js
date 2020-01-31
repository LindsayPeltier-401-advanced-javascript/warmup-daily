'use strict'

//array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//forLoop
function forloop(array) {
  for (let i = 0; i <= array.length; i++) {
    console.log(array[i]);
  }
}
forLoop(array);

//whileLoop
function whileLoop(array) {
  let i = 0;
  while (i < array.length) {
    console.log(array[i]);
    i++;
  }
}
whileLoop(array);