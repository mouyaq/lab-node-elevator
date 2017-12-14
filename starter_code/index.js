const Elevator = require('./elevator.js');
const Person = require('./person.js');

var elevator = new Elevator();
elevator.start();
elevator.stop();
for (let i = 0; i < 20; i++) {
  elevator.floorUp();
  elevator.update();
}
for (let i = 0; i < 20; i++) {
  elevator.floorDown();
  elevator.update();
}
