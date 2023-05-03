"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _auth = require("../controllers/auth");
// @flow

var express = require("express");
var router = express.Router();

// @route POST api/v1/auth/register
// @desc Register user
// @access Public
router.post("/register", _auth.register);

// @route POST api/v1/auth/register
// @desc Login user
// @access Public
router.post("/login", _auth.login);
var _default = router;
exports["default"] = _default;