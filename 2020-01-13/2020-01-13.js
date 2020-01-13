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

function map(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}
map(array, x => (x += 2));

//Implement .filter()

function filter(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

filter(array, n => n === 5);

//Implement .reduce()

function reduce(array, callback) {
  let newValue = 0;
  for (let i = 0; i < array.length; i++) {
    newValue = callback(newValue, array[i]);
  }
  return newValue;
}

var reducer = (accumulator, current) => {
  return (accumulator += current);
};

console.log(reduce(array, reducer));
