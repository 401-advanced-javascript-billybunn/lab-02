'use strict';

// TODO: Implement both Car and Motorcycle using a Javascript Class (in the vehicle-class.js file)

class Vehicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }

  // All Vehicles can drive and stop
  drive() {
    return 'Moving Forward';
  }
  stop() {
    return 'Stopping';
  }
}

// Cars are vehicles
class Car extends Vehicle {
  constructor(name) {
    super();
    this.name = name;
    this.wheels = 4;
  }
}

// Motorcycles are vehicles
class Motorcycle extends Vehicle {

  constructor(name) {
    super();
    this.name = name;
    this.wheels = 2;
  }

  // Only Motorcylces can do wheelies
  wheelie() {
    return 'Wheee!';
  }
}

module.exports = { Car, Motorcycle };
