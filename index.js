let driverId = 0
let store = {drivers:[], passengers: [], trips: []}
let passengerId = 0
let tripId = 0

class Driver {
  constructor(name){
    this.id = ++driverId
    this.name = name

    store.drivers.push(this)
  }
    trips(){
      return store.trips.filter(trip => {
        return trip.driverId === this.id
      })
    }

    passengers(){
      let allTrips = this.trips();
      let allPassengersId = allTrips.map(trip => trip.passengerId)
      return allPassengersId.map(passengerId => store.passengers.find(passenger => passenger.id === passengerId))
    }
}

class Passenger {
  constructor(name) {
    this.id = ++passengerId
    this.name = name

    store.passengers.push(this)
  }
    trips(){
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }

    drivers(){
      let allTrips = this.trips();
      let allDriversId = allTrips.map(trip => trip.driverId)
      return allDriversId.map(driverId => store.drivers.find(driver => driver.id === driverId))
    }
}

class Trip {
  constructor(driver, passenger){
  this.id = ++tripId
  this.driverId = driverId
  this.passengerId = passengerId
  store.trips.push(this)
  }
    driver(){
      return store.drivers.find(driver => {
        return driver.id === this.driverId;
      })
    }

    passenger(){
      return store.passengers.find(passenger => {
        return passenger.id === this.passengerId
      })

}
}
