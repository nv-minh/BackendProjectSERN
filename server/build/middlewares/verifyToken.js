"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var verifyToken = function verifyToken(req, res, next) {
  var _req$headers$authoriz;
  var accessToken = (_req$headers$authoriz = req.headers.authorization) === null || _req$headers$authoriz === void 0 ? void 0 : _req$headers$authoriz.split(' ')[1];
  if (!accessToken) return res.status(401).json({
    err: 1,
    msg: 'Missing access token'
  });
  _jsonwebtoken["default"].verify(accessToken, process.env.SECRET_KEY, function (err, user) {
    if (err) return res.status(401).json({
      err: 1,
      msg: 'Access token expired'
    });
    req.user = user;
    next();
  });
};
var _default = verifyToken;
exports["default"] = _default;