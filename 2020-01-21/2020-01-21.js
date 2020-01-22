'use strict';

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

filter(array, n => n === 1);

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

const people = ['Fred', 'Barney', 'Wilma'];

const stuff = {
  tv: 'small',
  radio: 'ipod',
  toothbrush: 'electric',
  cars: ['Corvette', 'Jeep']
};

let state = {};

let newPeople = [];
const newStuff = {};
let newState = {};

let newPeople = ['Betty', ...people, 'BamBam'];

const newStuff = { ...stuff, cars: [...stuff.cars, 'Bug'] };

const state = { people, stuff };

let newState = {
  ...state,
  people: ['Betty', ...people, 'BamBam'],
  stuff: { ...stuff, cars: [...stuff.cars, 'Bug'] }
};
