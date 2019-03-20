'use strict';

// TODO: Implement both Car and Motorcycle using a Javascript Factory Function (in the vehicle-factory.js file)

const Vehicle = () => ({
  drive: () => {
    return 'Moving Forward';
  },
  stop: () => {
    return 'Stopping';
  },
});

const wheelie = () => ({
  wheelie: () => {
    return 'Wheee!';
  },
});

function CarFactory(name) {
  let car = Object.assign(
    {name},
    {wheels: 4},
    Vehicle()
  );
  return Object.freeze(car);
}

function MotorcycleFactory(name) {
  let motorcycle = Object.assign(
    {name},
    {wheels: 2},
    wheelie(),
    Vehicle()
  );
  return Object.freeze(motorcycle);
}

module.exports = {CarFactory, MotorcycleFactory};
