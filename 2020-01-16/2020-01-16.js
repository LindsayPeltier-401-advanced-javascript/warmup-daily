'use strict';

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array);

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

function map(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}
map(array, x => (x += 1));

function filter(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

filter(array, n => n === 3);

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

// Objects

const people = ['squirrel', 'chipmunk', 'meerkat'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota', 'Mazda']
};

let state = {};

let newPeople = [];
const newStuff = {};
let newState = {};

let newPeople = ['raccoon', ...people, 'rabbit'];

const newStuff = { ...stuff, cars: [...stuff.cars, 'GMC'] };

const state = { people, stuff };

let newState = {
  ...state,
  people: ['raccoon', ...people, 'rabbit'],
  stuff: { ...stuff, cars: [...stuff.cars, 'GMC'] }
};
