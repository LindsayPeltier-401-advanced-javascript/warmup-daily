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
map(array, x => (x += 1));

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

filter(array, n => n === 3);

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

// Objects
// Begin with the starter code below ...

const people = ['Rachel', 'Ross', 'Joey'];

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

//Using spread and destructuring assignment, create a new array called newPeople, which is a copy of the people array, with a person named 'Odie' added to the beginning and one named 'Garfield' added to the end.
let newPeople = ['Leia', ...people, 'C3PO'];

//Using spread and destructuring assignment, create a new object called newStuff, which is a copy of the stuff object, with a new car added to the end of the cars array within it
const newStuff = { ...stuff, cars: [...stuff.cars, 'GMC'] };

//Create a state object with keys of people and stuff that contain the people and stuff data.
//Do this using object destructuring assignment
const state = { people, stuff };

//Using spread and destructuring assignments, create a new object called newSate, repeating the newPeople and newStuff steps above but directly within the people and stuff nodes of the state object(don't just spread in newPeople and newStuff)
let newState = {
  ...state,
  people: ['Chandler', ...people, 'Pheobe'],
  stuff: { ...stuff, cars: [...stuff.cars, 'GMC'] }
};

//Prove that the original people, stuff, and state are unchanged.
