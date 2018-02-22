let store = {drivers:[], passengers:[], trips:[]}
let driverId = 0
let passengerId = 0
let tripId = 0
class Driver{
  constructor(name){
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })

  }

  passengers(){
    let allTrips = this.trips();
    let allPassengerId = allTrips.map(trip => trip.passengerId)
    return allPassengerId.map(passengerId => store.passengers.find(passenger => passenger.id === passengerId))


  }
}

class Passenger{
  constructor(name){
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this)
  }

  drivers(){
    let allTrips = this.trips();
    let allDriverId = allTrips.map(trip => trip.driverId)
    return allDriverId.map(driverId => store.drivers.find(driver => driver.id === driverId))



  }

  trips(){
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })

  }

}

class Trip{
  constructor(driver, passenger){
    this.id = ++tripId;
    this.driverId = driver.id;
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
      return passenger.id === this.passengerId
    })

  }


}
