"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataPrice = exports.dataArea = void 0;
var _generateCode = _interopRequireDefault(require("./generateCode"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var prices = [{
  min: 0,
  max: 1,
  value: 'Dưới 1 triệu'
}, {
  min: 1,
  max: 2,
  value: 'Từ 1 - 2 triệu'
}, {
  min: 2,
  max: 3,
  value: 'Từ 2 - 3 triệu'
}, {
  min: 3,
  max: 5,
  value: 'Từ 3 - 5 triệu'
}, {
  min: 5,
  max: 7,
  value: 'Từ 5 - 7 triệu'
}, {
  min: 7,
  max: 10,
  value: 'Từ 7 - 10 triệu'
}, {
  min: 10,
  max: 15,
  value: 'Từ 10 - 15 triệu'
}, {
  min: 15,
  max: 999999,
  value: 'Trên 15 triệu'
}];
var areas = [{
  min: 0,
  max: 20,
  value: 'Dưới 20m'
}, {
  min: 20,
  max: 30,
  value: 'Từ 20m - 30m'
}, {
  min: 30,
  max: 50,
  value: 'Từ 30m - 50m'
}, {
  min: 50,
  max: 70,
  value: 'Từ 50m - 70m'
}, {
  min: 70,
  max: 90,
  value: 'Từ 70m - 90m'
}, {
  min: 90,
  max: 9999999,
  value: 'Trên 90m'
}];
var dataPrice = prices.map(function (item) {
  return _objectSpread(_objectSpread({}, item), {}, {
    code: (0, _generateCode["default"])(item.value)
  });
});
exports.dataPrice = dataPrice;
var dataArea = areas.map(function (item) {
  return _objectSpread(_objectSpread({}, item), {}, {
    code: (0, _generateCode["default"])(item.value)
  });
});
exports.dataArea = dataArea;