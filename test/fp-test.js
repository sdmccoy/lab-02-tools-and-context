'use strict';

// create stand alone map, filter, reduce, concat, and splice using call, bind, and apply
// the standlone functions should have the signature (array, ...args) => array

const expect = require('expect');
const fp = require('../lib/fp.js');

let arrData = [1, 5, 7, 3];
let mapped = (n) => n * 3;
let filtered = (n) => n > 5;
let reduced = [(a, c) => a + c];
let concatted = ['fish', 'turtle'];
let spliced = [2, 1, 'splice', 'galore'];

describe('Testing call method on map function', () => {
  it('it should return 3, 15, 21, 9', () => {
    let input = fp.map(arrData, mapped);
    expect(input).toEqual([3, 15, 21, 9]);
  });
  it('it should return null', () => {
    expect(fp.map('yellow', mapped)).toBe(null);
    expect(fp.map(false, mapped)).toBe(null);
    expect(fp.map({}, mapped)).toBe(null);
  });
});

describe('Testing call method on filter function', () => {
  it('it should return 7', () => {
    let input = fp.filter(arrData, filtered);
    expect(input).toEqual([7]);
  });
  it('it should return null', () => {
    expect(fp.map('yellow', filtered)).toBe(null);
    expect(fp.map(false, filtered)).toBe(null);
    expect(fp.map({}, filtered)).toBe(null);
  });
});

describe('Testing apply method on reduce function', () => {
  it('it should return 16', () => {
    let input = fp.reduce(arrData, reduced);
    expect(input).toEqual([16]);
  });
  it('it should return null', () => {
    expect(fp.map('yellow', reduced)).toBe(null);
    expect(fp.map(false, reduced)).toBe(null);
    expect(fp.map({}, reduced)).toBe(null);
  });
});

describe('Testing call method on concat function', () => {
  it('it should return 1, 5, 7, 3, fish, turtle', () => {
    let input = fp.concat(arrData, concatted);
    expect(input).toEqual([1, 5, 7, 3, 'fish', 'turtle']);
  });
  it('it should return null', () => {
    expect(fp.map('yellow', concatted)).toBe(null);
    expect(fp.map(false, concatted)).toBe(null);
    expect(fp.map({}, concatted)).toBe(null);
  });
});

describe('Testing apply method on splice function', () => {
  it('it should return 1, 5, splice, galore, 3', () => {
    let removed = fp.splice(arrData, spliced);
    expect(removed).toEqual([7]);
    let kept = arrData;
    expect(kept).toEqual([1, 5, 'splice', 'galore', 3]);
  });
  it('it should return null', () => {
    expect(fp.map('yellow', spliced)).toBe(null);
    expect(fp.map(false, spliced)).toBe(null);
    expect(fp.map({}, spliced)).toBe(null);
  });
});
