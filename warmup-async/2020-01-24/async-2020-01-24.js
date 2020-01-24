'use strict';

// Promises
const superagent = require('superagent');
const fetchPeopleWithPromises = () => {

  return superagent.get('https://swapi.co/api/people')
    .then(response => {
      return response.body.result.map(person => {
        return superagent.get(person.url)
      })
    })
    .then(peopleRequests => {
      return Promise.all(peopleRequests)
        .then(people => {
          let names = [];
          for (let data of people) {
            names.push(data.body.name);
          }
          return names;
        })
    })

};

fetchPeopleWithPromises()
  .then(people => console.log({ people }));






