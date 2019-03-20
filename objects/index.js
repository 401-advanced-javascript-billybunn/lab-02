'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');
const VehicleClass = require('./vehicle-class.js');

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class
const nissan = new VehicleClass.Car('Nissan Versa');
console.log(nissan.name, nissan.drive(), nissan.stop());

const yamaha = new VehicleClass.Motorcycle('Yamaha');
console.log(yamaha.name, yamaha.wheelie(), yamaha.stop());

// Implement a car and motorcycle using a Factory