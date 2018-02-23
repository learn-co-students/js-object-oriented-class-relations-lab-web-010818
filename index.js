let store = {drivers:[], passengers:[], trips:[]};

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }

  trips() {
    // debugger
    return store.trips.filter((trip) => trip.driverId === this.id)
  }

  passengers() {
    return this.trips().map(trip => trip.passenger())
  }
}


class Passenger {
  constructor(name) {
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter(trip => trip.passengerId === this.id)
  }

  drivers() {
    return this.trips().map(trip => trip.driver())
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    // this.driver = driver
    // this.passenger = passenger
    this.driverId = driver.id
    this.passengerId = passenger.id
    store.trips.push(this)
  }

  driver() {
    return store.drivers.find((driver) => this.driverId === driver.id )
  }

  passenger() {
    return store.passengers.find((passenger => this.passengerId === passenger.id))
  }
}
