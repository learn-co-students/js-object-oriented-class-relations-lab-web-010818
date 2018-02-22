let driverId = 0;
let passengerId = 0;
let tripId = 0;
let store = {drivers: [], passengers: [], trips: []};

class Driver {
  constructor(name) {
    this.name= name,
    this.id = driverId++,
    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter((e)=>e.driverId === this.id);
  }

  passengers() {
    return this.trips().map(trip => trip.passenger());
  }
}

class Passenger {
  constructor(name) {
    this.name= name,
    this.id = passengerId++,
    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter((e)=>e.passengerId === this.id);
  }

  drivers() {
    return this.trips().map(trip => trip.driver());
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = tripId++,
    this.passengerId = passenger.id,
    this.driverId = driver.id,
    store.trips.push(this)
  }

  passenger() {
    return store.passengers.find((e)=>e.id === this.passengerId);
  }

  driver() {
    return store.drivers.find((e)=>e.id === this.driverId);
  }
}
