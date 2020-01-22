'use strict';

// Array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array);

// ForLoop
function forLoop(array) {
  for (let i = 0; i <= array.length; i++) {
    console.log(array[i]);
  }
}

forLoop(array);

// WhileLoop

function whileLoop(array) {
  let i = 0;
  while (i < array.length) {
    console.log(array[i]);
    i++;
  }
}

whileLoop(array);

