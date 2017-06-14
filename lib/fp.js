'use strict';

// create stand alone map, filter, reduce, concat, and splice using call, bind, and apply
// the standlone functions should have the signature (array, ...args) => array
const fp = module.exports = {};

fp.map = (data, callback) =>
  Array.isArray(data) ? Array.prototype.map.call(data, callback) : null;

fp.filter = (data, callback) =>
  Array.isArray(data) ? Array.prototype.filter.call(data, callback) : null;

fp.reduce = (data, callback) =>
  Array.isArray(data) ? Array.prototype.reduce.apply(data, callback) : null;

fp.concat = (data, data2) =>
  Array.isArray(data) ? Array.prototype.concat.call(data, data2) : null;

fp.splice = (data, params) =>
  Array.isArray(data) ? Array.prototype.splice.apply(data, params) : null;
