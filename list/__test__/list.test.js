'use strict';

// These 2 should be interchangeable!
// const List = require('../list.js');
const List = require('../list-constructor.js');

describe('List Data Structure', () => {

  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  it('pops items from the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    stuff.push('d');
    stuff.pop();
    stuff.pop();
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  it('unshifts items to the beginning of the data set', () => {
    let stuff = new List();
    stuff.unshift('a');
    stuff.unshift('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('a');
  });

  it('shifts items from the beginning of the data set', () => {
    let stuff = new List();
    stuff.unshift('a');
    stuff.unshift('b');
    stuff.unshift('c');
    stuff.unshift('d');
    stuff.shift();
    stuff.shift();
    expect(stuff.length).toEqual(2);
    expect(stuff.data[0]).toEqual('b');
  });

});
