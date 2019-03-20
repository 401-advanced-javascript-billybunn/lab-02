'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');
const VehicleClass = require('./vehicle-class.js');
const VehicleFactory = require('./vehicle-factory.js');

const FlyingVehicleConstructor = require('./flyingvehicle-constructor.js');
const FlyingVehicleClass = require('./flyingvehicle-class.js');
const FlyingVehicleFactory = require('./flyingvehicle-factory.js');




// Vehicles
// Implement a airplane and motorcycle using a Constructor
// const mazda = new VehicleConstructor.Car('Mazda 3');
// console.log(mazda.name, mazda.drive(), mazda.stop());

// const harley = new VehicleConstructor.Motorcycle('Harley');
// console.log(harley.name, harley.wheelie(), harley.stop());

// // Implement a car and motorcycle using a Class
// const nissan = new VehicleClass.Car('Nissan Versa');
// console.log(nissan.name, nissan.drive(), nissan.stop());

// const yamaha = new VehicleClass.Motorcycle('Yamaha');
// console.log(yamaha.name, yamaha.wheelie(), yamaha.stop());

// // Implement a car and motorcycle using a Factory
// const toyota = new VehicleFactory.CarFactory('Toyota Camry');
// console.log(toyota.name, toyota.drive(), toyota.stop());

// const ducati = new VehicleFactory.MotorcycleFactory('Ducati');
// console.log(ducati.name, ducati.wheelie(), ducati.stop());



// FlyingVehicles
// Implement a airplane and helicopter using a Constructor
const boeing747 = new FlyingVehicleConstructor.Airplane('Boeing 747');
console.log(boeing747.name, boeing747.takeOff(), boeing747.crash(), boeing747.barrelRoll(), boeing747.surelyYouCantBeSerious());

const blackhawk = new FlyingVehicleConstructor.Helicopter('Blackhawk');
console.log(blackhawk.name, blackhawk.takeOff(), blackhawk.crash(), blackhawk.decapitate());

// // Implement a airplane and helicopter using a Class
const turboProp = new FlyingVehicleClass.Airplane('Turboprop');
console.log(turboProp.name, turboProp.takeOff(), turboProp.crash(), turboProp.barrelRoll(), turboProp.surelyYouCantBeSerious());

const chinook = new FlyingVehicleClass.Helicopter('CH-47 Chinook');
console.log(chinook.name, chinook.takeOff(), chinook.crash(), chinook.decapitate());

// // Implement a airplane and helicopter using a Factory
const gSixPrivate = new FlyingVehicleFactory.AirplaneFactory('Gulfstream G650');
console.log(gSixPrivate.name, gSixPrivate.takeOff(), gSixPrivate.crash(), gSixPrivate.barrelRoll(), gSixPrivate.surelyYouCantBeSerious());

const apache = new FlyingVehicleFactory.HelicopterFactory('Boeing AH-64 Apache');
console.log(apache.name, apache.takeOff(), apache.crash(), apache.decapitate());

// // Implement a airplane and helicopter using a Factory
// const toyota = new FlyingVehicleFactory.AirplaneFactory('Toyota Camry');
// console.log(toyota.name, toyota.drive(), toyota.crash());

// const ducati = new FlyingVehicleFactory.HelicopterFactory('Ducati');
// console.log(ducati.name, ducati.takeOff(), ducati.crash());