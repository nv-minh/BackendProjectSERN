"use strict";

var _cors = _interopRequireDefault(require("cors"));
var _index = _interopRequireDefault(require("./src/routes/index"));
var _connectDB = _interopRequireDefault(require("./src/config/connectDB"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var express = require("express");
require("dotenv").config();
var app = express();
app.use((0, _cors["default"])({
  origin: "/*",
  methods: ["GET", "POST", "PUT", "DELETE"]
}));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
(0, _index["default"])(app);
(0, _connectDB["default"])();
var port = process.env.PORT || 8888;
app.listen(port, function () {
  return console.log("Server started on port ".concat(port));
});