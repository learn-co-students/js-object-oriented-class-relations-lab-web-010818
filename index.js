
// has many trips
// has many passengers through trips

let driverId = 0

let store = {drivers:[], passengers:[], trips: []}

class Driver{
  // has many trips
  // has many passengers through trips

  constructor(name){
    this.name = name
    this.id = ++driverId

    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter(trip => (this.id === trip.driverId))
    }

  passengers(){
    return this.trips().map(trip=>(trip.passenger()))

  }
}



let passengerId = 0

class Passenger{
  constructor(name){
    this.name = name
    this.id = ++passengerId

    store.passengers.push(this)
  }

  trips(){
    return store.trips.filter(trip => (this.id === trip.passengerId))
  }

  drivers(){
    return this.trips().map(trip=>(trip.driver()))
  }
}


let tripId = 0

class Trip{
  constructor(driver, passenger){
    this.id = ++tripId
    if (driver){
      this.driverId = driver.id
    }

    if (passenger){
      this.passengerId = passenger.id
    }
    store.trips.push(this)
  }

  driver(){
    return store.drivers.find(driver=>{return driver.id === this.driverId})
  }

  passenger(){
    return store.passengers.find(passenger=>{return passenger.id === this.passengerId})
  }
}
