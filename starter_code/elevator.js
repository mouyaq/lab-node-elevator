class Elevator {
  constructor() {
    this.floor = -1;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.waitingList = [];
    this.passengers = [];
    this.direction = 'up';
    this.interval;
  }

  start() {
    this.interval = setInterval(() => {
      if (this.floor < 10 && this.direction === 'up') {
        this.floorUp();
      } else if (this.floor > 0 && this.direction === 'down') {
        this.floorDown();
      } else {
        if (this.floor == 10 && this.direction == 'up') {
          this.direction = 'down';
          this.floorDown();
        } else {
          this.direction = 'up';
          this.floorUp();
        }
      }
      if (this.requests.length > 0) {
        this.requests.map(request => {
          if (request == this.floor) {
            this.waitingList.map(person => {
              if (person.originFloor == request) {
                this._passengersEnter(person);
              }
            });
            this.passengers.map(person => {
              if (person.destinationFloor == request) {
                this._passengersLeave(person);
              }
            });
          }
        });
      }
      this.stop();
      this.update();
    }, 1000);
  }

  stop() {
    if (this.waitingList.length == 0 && this.passengers.length == 0) {
      clearInterval(this.interval);
    }
  }
  update() {
    this.log();
  }
  _passengersEnter(person) {
    this.passengers.push(person);
    this.waitingList.splice(this.waitingList.indexOf(person), 1);
    this.requests.push(person.destinationFloor);

    console.log(`${person.name} has enter the elevator`);
  }
  _passengersLeave(person) {
    this.passengers.splice(this.passengers.indexOf(person), 1);
    console.log(`${person.name} has left the elevator`);
  }

  floorUp() {
    this.floor++;
  }
  floorDown() {
    this.floor--;
  }
  call(person) {
    console.log(
      `${person.name} call to elevator at floor ${person.originFloor}`
    );
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
  }
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
