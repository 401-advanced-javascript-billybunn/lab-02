'use strict';

const FlyingVehicleConstructor = require('../flyingvehicle-constructor.js');
const FlyingVehicleClass = require('../flyingvehicle-class.js');
const FlyingVehicleFactory = require('../flyingvehicle-factory.js');

let types = ['Constructor', 'Class', 'Factory'];

describe('FlyingVehicles', () => {

  describe('Airplane', () => {

    function getAirplane(type) {
      switch (type) {
        case 'Constructor':
          return new FlyingVehicleConstructor.Airplane('foo');
        case 'Class':
          return new FlyingVehicleClass.Airplane('foo');
        case 'Factory':
          return new FlyingVehicleFactory.AirplaneFactory('foo');
        default:
          return {};
      }
    }

    types.forEach(type => {

      let airplane = getAirplane(type);

      it(`${type} (Airplane) can fly`, () => {
        expect(airplane.canFly).toEqual(true);
      });

      it(`${type} (Airplane) can take off`, () => {
        expect(airplane.takeOff()).toBeTruthy();
      });

      it(`${type} (Airplane) can crash`, () => {
        expect(airplane.crash()).toBeTruthy();
      });

      it(`${type} (Airplane) cannot decapitate`, () => {
        expect(airplane.decapitate).toBeUndefined();
      });
    });

  });

  describe(`Helicopter`, () => {

    function getHelicopter(type) {
      switch (type) {
        case 'Constructor':
          return new FlyingVehicleConstructor.Helicopter('foo');
        case 'Class':
          return new FlyingVehicleClass.Helicopter('foo');
        case 'Factory':
          return new FlyingVehicleFactory.HelicopterFactory('foo');
        default:
          return {};
      }
    }

    types.forEach(type => {

      let helicopter = getHelicopter(type);

      it(`${type} (Helicopter) can fly`, () => {
        expect(helicopter.canFly).toEqual(true);
      });

      it(`${type} (Helicopter) can take off`, () => {
        expect(helicopter.takeOff()).toBeTruthy();
      });

      it(`${type} (Helicopter) can crash`, () => {
        expect(helicopter.crash()).toBeTruthy();
      });

      it(`${type} (Helicopter) can decapitate`, () => {
        expect(helicopter.decapitate()).toBeTruthy();
      });

      it(`${type} (Helicopter) cannot do a do a barrel roll`, () => {
        expect(helicopter.barrelRoll).toBeUndefined();
      });

      it(`${type} (Helicopter) cannot quote Airplane`, () => {
        expect(helicopter.surelyYouCantBeSerious).toBeUndefined();
      });

    });

  });

});
