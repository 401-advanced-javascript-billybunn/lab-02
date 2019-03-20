'use strict';

const FlyingVehicle = () => ({
  takeOff: () => {
    return 'We have lift-off!';
  },
  crash: () => {
    return 'WE\'RE ALL GONNA DIE!';
  },
});

const barrelRoll = () => ({
  barrelRoll: () => {
    return 'Do a barrel roll!';
  },
});

const surelyYouCantBeSerious = () => ({
  surelyYouCantBeSerious: () => {
    return 'I am serious. And don\'t call me Shirley';
  },
});

const decapitate = () => ({
  decapitate: () => {
    return 'Duck!';
  },
});

function AirplaneFactory(name) {
  let airplane = Object.assign(
    {name},
    {canFly: true},
    barrelRoll(),
    surelyYouCantBeSerious(),
    FlyingVehicle()
  );
  return Object.freeze(airplane);
}

function HelicopterFactory(name) {
  let helicopter = Object.assign(
    {name},
    {canFly: true},
    decapitate(),
    FlyingVehicle()
  );
  return Object.freeze(helicopter);
}

module.exports = {AirplaneFactory, HelicopterFactory};
