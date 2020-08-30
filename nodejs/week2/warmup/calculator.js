const express = require('express');
const router = express.Router();
const fs = require('fs');
//let exports = module.exports;

module.exports.add = function(a, b) {
  return a + b;
};

module.exports.mul = function(a, b) {
  return a * b;
};

module.exports.sub = function(a, b) {
  return a - b;
};

module.exports.div = function(a, b) {
  return a / b;
};
