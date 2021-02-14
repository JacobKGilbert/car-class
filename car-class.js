class Vehicle {
  constructor(make, model, year){
    this.make = make
    this.model = model
    this.year = year
  }

  honk() {
    return 'Beep.'
  }

  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}`
  }
}

class Car extends Vehicle{
  constructor(make, model, year){
    super()
    this.numWheels = 4
  }
}

class Motorcycle extends Vehicle{
  constructor(make, model, year) {
    super()
    this.numWheels = 2
  }

  revEngine() {
    return 'Vroom!!!'
  }
}

class Garage {
  constructor(capacity) {
    this.capacity = capacity
    this.vehicles = []
  }

  add(vehicle) {
    if (vehicle instanceof Car || vehicle instanceof Motorcycle){
      if (this.vehicles.length < this.capacity){
        this.vehicles.push(vehicle)
        return 'Vehicle added!'
      }
    } else {
      return 'Only vehicles are allowed in here!'
    }
  }
}