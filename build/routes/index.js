"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _auth = _interopRequireDefault(require("./auth"));
var _insert = _interopRequireDefault(require("./insert"));
var _category = _interopRequireDefault(require("./category"));
var _post = _interopRequireDefault(require("./post"));
var _price = _interopRequireDefault(require("./price"));
var _area = _interopRequireDefault(require("./area"));
var _province = _interopRequireDefault(require("./province"));
var _user = _interopRequireDefault(require("./user"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var initRoutes = function initRoutes(app) {
  app.use('/api/v1/auth', _auth["default"]);
  app.use('/api/v1/insert', _insert["default"]);
  app.use('/api/v1/category', _category["default"]);
  app.use('/api/v1/post', _post["default"]);
  app.use('/api/v1/price', _price["default"]);
  app.use('/api/v1/area', _area["default"]);
  app.use('/api/v1/province', _province["default"]);
  app.use('/api/v1/user', _user["default"]);
  return app.use('/', function (req, res) {
    res.send('server on...');
  });
};
var _default = initRoutes;
exports["default"] = _default;