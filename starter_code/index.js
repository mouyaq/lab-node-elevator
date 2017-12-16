const Elevator = require('./elevator.js');
const Person = require('./person.js');

this.passengers = [
  new Person('Peter', Math.floor(Math.random()*11), Math.floor(Math.random()*11)),
  new Person('Julia', Math.floor(Math.random()*11), Math.floor(Math.random()*11)),
  new Person('Carol', Math.floor(Math.random()*11), Math.floor(Math.random()*11))
];

var elevator = new Elevator();
console.log("Passenger: ");
this.passengers.forEach(passenger => console.log(passenger) );
console.log("Waiting for a elevator call...");

this.passengers.forEach(passenger => {
  // setTimeout(passenger => elevator.call(passenger), Math.floor(Math.random()*5)*1000);
  setTimeout( () => elevator.call(passenger), Math.floor(Math.random()*5)*1000);
});

// setTimeout( () => {
//   //elevator.start();
//   this.passengers.forEach(passenger => elevator.call(passenger));  
// }, 5000);

