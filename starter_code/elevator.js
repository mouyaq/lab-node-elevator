class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.waitingList = [];
    this.passengers = [];
    this.direction = 'up';
    this.interval;
    this.intervals = [];
  }

  start() {
    this.interval = setInterval(() => {
      if (this.floor < 10 && this.direction === 'up') {
        this.floorUp();
      } 
      else if (this.floor > 0 && this.direction === 'down') {
        this.floorDown();
      } 
      else {
        if (this.floor == 10 && this.direction == 'up') {
          this.direction = 'down';
        } else {
          this.direction = 'up';
        }
      }
      this.update();
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
    }, 1000);
    this.intervals.push(this.interval);
  }

  stop() {
    clearInterval(this.intervals[0]);
    this.intervals.splice(0,1);
  }
  update() {
    this.log();
  }
  _passengersEnter(person) {
    if(this.waitingList.indexOf(person) != -1) {
      this.passengers.push(person);
      this.waitingList.splice(this.waitingList.indexOf(person), 1);
      this.requests.push(person.destinationFloor);
  
      console.log(`${person.name} has enter the elevator`);
    }
    else {
      console.log(`There is nobody waiting for`);
    }

  }
  _passengersLeave(person) {
    this.passengers.splice(this.passengers.indexOf(person), 1);
    console.log(`${person.name} has left the elevator`);
    this.stop();
  }

  floorUp() {
    if(this.floor < this.MAXFLOOR) {
      this.floor++;
    }
  }

  floorDown() {
    if(this.floor > 0) {
      this.floor--;
    }
  }
  
  call(person) {
    this.start();
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
