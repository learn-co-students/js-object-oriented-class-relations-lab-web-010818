let driverId = 0;
let passengerId = 0;
let tripId = 0;
let store = {drivers: [], passengers: [], trips: []};

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(trip => trip.driverId === this.id);
  }
  passengers() {
    return this.trips().map(trip => trip.passenger());
  }
}

class Passenger {
  constructor(name){
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(trip => trip.passengerId === this.id);
  }
  drivers() {
    return this.trips().map(trip => trip.driver());
  }
}

class Trip {
  constructor(driver, passenger){
    this.id = ++passengerId;
    store.trips.push(this);
    this.driverId = driver.id
    this.passengerId = passenger.id
  }

  driver(){
    return store.drivers.find(driver => driver.id === this.driverId)
  }

  passenger(){
    return store.passengers.find(passenger => passenger.id === this.passengerId)
  }
}
