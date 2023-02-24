const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImExNDY5ZTlhLTMzODktNGUxZi1iZTA5LWZmNDY2YzNiODM1Ni0xNjc3MjYwMjg2MDY5IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiYWRlZjA0NzktOThkNC00MzhkLThhMDMtNzIwNzdhZjY1ZDU3IiwidHlwZSI6InQifQ.dctBsQNxUMc0IEVrtzwA8RDFrvEUkncchQn4aT0hZzI'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
