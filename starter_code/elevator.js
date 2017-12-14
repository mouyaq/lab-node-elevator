class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.waitingList = [];
    this.passengers = [];
    this.direction = 'up';
    this.interval;
  }

  start() {
    this.interval = setInterval(() => {
      this.update();
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }
  update() {
    this.log();
  }
  _passengersEnter(person) {
    this.passengers.push(person.name);
    this.waitingList.splice(this.waitingList.indexOf(person), 1);
  }
  _passengersLeave() {}

  floorUp() {
    if (this.floor < 10) {
      this.floor++;
    }
  }
  floorDown() {
    if (this.floor > 0) {
      this.floor--;
    }
  }
  call(person) {
    this.requests.push(person);
    this.waitingList.push(person);
  }
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
