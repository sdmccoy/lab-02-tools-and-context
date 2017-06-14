'use strict';

const fp = require('./lib/fp.js');

let result = fp.map(process.argv, str => str.toUpperCase());
console.log(result);
return result;
