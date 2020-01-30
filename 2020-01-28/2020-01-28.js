'use strict';

// Array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//forLoop 
function forLoop(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
forLopp(array);

// whileLoop
function whileLoop(array) {
  let i = 0;
  while (i < array.length) {
    console.log(array[i]);
    i++;
  }
}
whileLoop(array);

// Map
function map(array, callback) {
  const newArray = [];
  for (let i = 0; i <= array.length; i++) {
    newArray.push(callbak(array[i]));
  }
  return newArray;
}
map(array, x => (x += 15));

// Filter
function filter(array, callback) {
  const newArry = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
filter(array, n => n === 1);

// Reduce
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

// Objects ------------------------------------>

const people = ['Bart', "Lisa", "Maggie"];

const stuff = {
  tv: 'small',
  radio: 'ipod',
  toothbrush: 'electric',
  cars: ['Jeep', 'Batmobile']
};

let state = {};
let newPeople = [];
const newStuff = {};
let newState = {};

let newPeople = ['Marge', ...people, 'Homer'];
const state = { people, stuff };

let newState = {
  ...state,
  people: ['Marge', ...people, 'Homer'],
  stuff: { ...stuff, cars: [...stuff.cars, "Camaro"] }
};

