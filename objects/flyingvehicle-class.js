'use strict';

class FlyingVehicle {
  constructor(name) {
    this.name = name;
    this.canFly = true;
  }

  // All FlyingVehicles can take off and crash
  takeOff() {
    return 'We have lift-off!';
  }
  crash() {
    return 'WE\'RE ALL GONNA DIE!';
  }
}

// Airplanes are FlyingVehicles
class Airplane extends FlyingVehicle {
  constructor(name) {
    super();
    this.name = name;
  }
  // Only Airplanes can do barrel rolls and quote 'Airplane'
  barrelRoll() {
    return 'Do a barrel roll!';
  }
  surelyYouCantBeSerious() {
    return 'I am serious. And don\'t call me Shirley';
  }
}

// Helicopters are FlyingVehicles
class Helicopter extends FlyingVehicle {

  constructor(name) {
    super();
    this.name = name;
  }

  // Only Helicopters can decapitate people
  decapitate() {
    return 'Duck';
  }
}

module.exports = { Airplane, Helicopter };
