const Elevator = require('./elevator.js');
const Person = require('./person.js');
this.passengers = [
  new Person('Peter', 0, 10),
  new Person('Julia', 3, 6),
  new Person('Carol', 2, 8)
];

var elevator = new Elevator();

elevator.start();
this.passengers.forEach(passenger => elevator.call(passenger));
