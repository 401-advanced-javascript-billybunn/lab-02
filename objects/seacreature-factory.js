'use strict';

const SeaCreature = () => ({
  swim: () => {
    return 'Just keep swimming…';
  },
});

function FishFactory(name) {
  let fish = Object.assign(
    {name},
    {hasGills: true},
    SeaCreature()
  );
  return Object.freeze(fish);
}

const claw = () => ({
  claw: () => {
    return 'I\'ll claw you, bro. Back up!';
  },
});

function LobsterFactory(name) {
  let lobster = Object.assign(
    {name},
    {hasGills: false},
    claw(),
    SeaCreature()
  );
  return Object.freeze(lobster);
}

module.exports = {FishFactory, LobsterFactory};


