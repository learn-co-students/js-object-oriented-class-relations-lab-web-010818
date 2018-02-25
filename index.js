
let store = {drivers: [], passengers: [], trips: []}
let driverId = 0
let passengerId = 0
let tripId = 0

class Driver {
  constructor (name){
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }

  passengerIds(){
    return this.trips().map(trip =>{
      return trip.passengerId
    })
  }

  passengers(){
    return store.passengers.filter(passenger =>{
    if (this.passengerIds().includes(passenger.id)){
      return passenger
    }})
  }
}



class Passenger {
  constructor (name, driver){
    this.name = name;
    this.id = ++passengerId
    // if(driver){
    //   this.driverId = driver.id
    // }

    store.passengers.push(this)

  }
  // setDriver(driver){
  //   this.driverId = driver.id
  // }
  drivers(){
    return store.drivers.filter(driver => {
      return driver.id === this.driverId
    })
  }
  trips(){
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }

  driverIds(){
    return this.trips().map(trip => {
      return trip.driverId
    })
  }

  drivers(){
    return store.drivers.filter(driver => {
      if (this.driverIds().includes(driver.id)){
        return driver
      }
    })
  }
}

class Trip {
  constructor(driver, passenger){
    this.id = ++tripId;
    this.driverId = driver.id
    this.passengerId = passenger.id;

    store.trips.push(this)

  }

  driver(){
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    })
  }

  passenger(){
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
    })
  }
}
