'use strict';

const SeaCreatureConstructor = require('../seacreature-constructor.js');
const SeaCreatureClass = require('../seacreature-class.js');
const SeaCreatureFactory = require('../seacreature-factory.js');

let types = ['Constructor', 'Class', 'Factory'];

describe('SeaCreatures', () => {

  describe('Fish', () => {

    function getFish(type) {
      switch (type) {
        case 'Constructor':
          return new SeaCreatureConstructor.Fish('foo');
        case 'Class':
          return new SeaCreatureClass.Fish('foo');
        case 'Factory':
          return new SeaCreatureFactory.FishFactory('foo');
        default:
          return {};
      }
    }

    types.forEach(type => {

      let fish = getFish(type);

      it(`${type} (Fish) has gills`, () => {
        expect(fish.hasGills).toEqual(true);
      });

      it(`${type} (Fish) can swim`, () => {
        expect(fish.swim()).toBeTruthy();
      });

      it(`${type} (Fish) cannot claw`, () => {
        expect(fish.claw).toBeUndefined();
      });
    });

  });

  describe(`Lobster`, () => {

    function getLobster(type) {
      switch (type) {
        case 'Constructor':
          return new SeaCreatureConstructor.Lobster('foo');
        case 'Class':
          return new SeaCreatureClass.Lobster('foo');
        case 'Factory':
          return new SeaCreatureFactory.LobsterFactory('foo');
        default:
          return {};
      }
    }

    types.forEach(type => {

      let lobster = getLobster(type);

      it(`${type} (Lobster) doesn\'t have gills`, () => {
        expect(lobster.hasGills).toEqual(false);
      });

      it(`${type} (Lobster) can swim`, () => {
        expect(lobster.swim()).toBeTruthy();
      });

      it(`${type} (Lobster) can claw`, () => {
        expect(lobster.claw()).toBeTruthy();
      });

    });

  });

});
