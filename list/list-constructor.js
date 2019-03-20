'use strict';

function List() {
  this.length = 0;
  this.data = {};
}
/**
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function (item) {
  this.data[this.length] = item;
  this.length++;
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function () {
  let returnValue = this.data[this.length];
  delete this.data[this.length];
  this.length--;
  return returnValue;
};

List.prototype.unshift = function (item) {
  for (let i = this.length; i > 0; i--) {
    this.data[i] = this.data[i - 1];
  }
  this.length++;
  this.data[0] = item;
};

List.prototype.shift = function (item) {
  let returnValue = this.data[0]; 
  this.length--;

  for (let i = 0; i < this.length; i++) {
    this.data[i] = this.data[i+1]; //?
  }

  delete this.data[this.length];
  return returnValue;
};

// let someList = new List();
// someList.push('a');
// someList.push('b');
// someList.unshift('a');
// someList.unshift('b');
// someList.unshift('c');
// someList.unshift('d');

// someList.shift();
// someList.unshift();

// someList; 


module.exports = List;
