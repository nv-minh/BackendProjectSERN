"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNumberFromStringV2 = exports.getNumberFromString = void 0;
var getNumberFromString = function getNumberFromString(string) {
  var number = 0;
  if (string.search('đồng/tháng') !== -1) {
    number = +string.match(/\d+/)[0] / Math.pow(10, 3);
  } else if (string.search('triệu/tháng') !== -1) {
    number = +string.match(/\d+/)[0];
  } else if (string.search('m')) {
    number = +string.match(/\d+/)[0];
  }
  return number;
};
exports.getNumberFromString = getNumberFromString;
var getNumberFromStringV2 = function getNumberFromStringV2(string) {
  var number = 0;
  if (string.search('đồng/tháng') !== -1) {
    number = +string.match(/\d+/)[0] / Math.pow(10, 3);
  } else if (string.search('triệu/tháng') !== -1) {
    number = +string.split(' ')[0];
  } else if (string.search('m')) {
    number = +string.match(/\d+/)[0];
  }
  return +number;
};
exports.getNumberFromStringV2 = getNumberFromStringV2;