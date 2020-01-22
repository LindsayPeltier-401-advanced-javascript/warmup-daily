'use strict';

//Create an Array of numbers, 1 - 10

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function forLoop(array) {
  for (let i = 0; i <= array.length - 1; i++) {
    console.log(array[i]);
  }
}

forLoop(array);

function whileLoop(array) {
  let i = 0;
  while (i < array.length) {
    console.log(array[i]);
    i++;
  }
}

whileLoop(array);
