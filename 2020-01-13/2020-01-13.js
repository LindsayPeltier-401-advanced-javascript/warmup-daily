'use strict';

//Create an array of numbers, 1 - 10

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(array);

//Write a function, called forLoop that takes an array as a parameter, runs the array through a for(...) loop and does a console.log() of each element.

function forLoop(array) {
  for (let i = 0; i <= array.length - 1; i++) {
    console.log(array[i]);
  }
}

forLoop(array);

//Write a function, called whileLoop that takes an array as a parameter, runs the array through a while (...) loop and does a console.log() of each element.

function whileLoop(array) {
  let i = 0;
  while (i < array.length) {
    console.log(array[i]);
    i++;
  }
}

whileLoop(array);

//Implement.map()

//Implement .filter()

//Implement .reduce()
