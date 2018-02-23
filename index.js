let store = {drivers: [], passengers: [], trips: []}

let driverId = 0;
let allDrivers = [];

class Driver {
  constructor(name){
    this.id = ++driverId;
    this.name = name;

    store.drivers.push(this);
  }
  trips() { return store.trips.filter(trip => trip.driver() === this); }

  passengers() { return this.trips().map(trip => trip.passenger() ); }
}

let passengerId = 0;
let allPassengers = [];

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;

    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(function(trip) {
      return trip.passenger() === this
    }.bind(this))
  }

  drivers() {
    console.log(this.trips())
    return this.trips().map(function(trip) {
      return trip.driver()
    }.bind(this))
  }

  // drivers() { return this.trips.map(trip => trip.driver; ) }
}


tripId = 0;
let allTrips = [];

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    this.driverId = driverId;
    this.passengerId = passengerId;

    store.trips.push(this);
  }

  driver() {
    return store.drivers.find(function(driver) {
      return driver.id === this.driverId
    }.bind(this))
  }

  passenger() {
    return store.passengers.find(function(passenger) {
      return passenger.id === this.passengerId
    }.bind(this))
  }

}
