"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require('dotenv').config();
var generateCode = function generateCode(value) {
  var output = '';
  value = value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ").join("");
  var merge = value + process.env.phongtro123;
  var length = merge.length;
  // adc + phongtro123 = adcphongtro123
  for (var i = 0; i < 3; i++) {
    var index = i === 2 ? Math.floor(merge.length / 2 + length / 2) : Math.floor(length / 2);
    output += merge.charAt(index);
    length = index;
  }
  return "".concat(value.charAt(2)).concat(output).toUpperCase();
};
var _default = generateCode;
exports["default"] = _default;