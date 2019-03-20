'use strict';

const SeaCreature = function (name) {
  this.name = name;
};

SeaCreature.prototype.swim = () => {
  return 'Just keep swimming…';
};


const Fish = function (name) {
  SeaCreature.call(this, name);
  this.hasGills = true;
};

Fish.prototype = new SeaCreature();

const Lobster = function (name) {
  SeaCreature.call(this, name);
  this.hasGills = false;
};

Lobster.prototype = new SeaCreature;

Lobster.prototype.claw = () => {
  return 'I\'ll claw you, bro. Back up!';
};

module.exports = {Fish, Lobster};
