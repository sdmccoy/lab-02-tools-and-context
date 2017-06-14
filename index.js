'use strict';

const fp = require('./lib/fp.js');

const main =  module.exports = () => {
  let result = fp(process.argv[2]);
  console.log(result);
  return result;
};
