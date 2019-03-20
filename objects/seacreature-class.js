'use strict';

class SeaCreature {
  constructor(name) {
    this.name = name;
  }
  // All SeaCreatures can swim
  swim() {
    return 'Just keep swimming…';
  }
}

// Fish are SeaCreatures
class Fish extends SeaCreature {
  constructor(name) {
    super();
    this.name = name;
    this.hasGills = true;
  }
}

// Lobsters are SeaCreatures
class Lobster extends SeaCreature {
  constructor(name) {
    super();
    this.name = name;
    this.hasGills = false;
  }
  // Only Lobsters can claw
  claw() {
    return 'I\'ll claw you, bro. Back up!';
  }
}

module.exports = { Fish, Lobster };
