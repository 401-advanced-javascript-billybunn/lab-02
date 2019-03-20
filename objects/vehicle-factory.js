'use strict';

// TODO: Implement both Car and Motorcycle using a Javascript Factory Function (in the vehicle-factory.js file)

const CarFactory = (name) => ({
  name: name,
  drive: () => {
    return 'Moving Forward';
  },
  stop: () => {
    return 'Stopping';
  },
});

// module.exports = {CarFactory, MotorcycleFactory};

const carViaFactory = CarFactory('hey');

console.log(carViaFactory, carViaFactory.drive(), carViaFactory.stop());