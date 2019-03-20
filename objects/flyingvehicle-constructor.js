'use strict';

const FlyingVehicle = function (name) {
  this.name = name;
  this.canFly = true;
};

FlyingVehicle.prototype.takeOff = () => {
  return 'We have lift-off!';
};

FlyingVehicle.prototype.crash = () => {
  return 'WE\'RE ALL GONNA DIE!';
};

// Airplane Constructor
const Airplane = function (name) {
  FlyingVehicle.call(this, name);
};

Airplane.prototype = new FlyingVehicle();

Airplane.prototype.barrelRoll = () => {
  return 'Do a barrel roll!';
};

Airplane.prototype.surelyYouCantBeSerious = () => {
  return 'I am serious. And don\'t call me Shirley';
};

// Helicopter Constructor
const Helicopter = function (name) {
  FlyingVehicle.call(this, name);
};

Helicopter.prototype = new FlyingVehicle;

Helicopter.prototype.decapitate = () => {
  return 'Duck!';
};

module.exports = {Airplane, Helicopter};
