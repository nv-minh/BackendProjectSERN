// @flow
import { register, login } from "../controllers/auth";
const express = require("express");

const router = express.Router();

// @route POST api/v1/auth/register
// @desc Register user
// @access Public
router.post("/register", register);

// @route POST api/v1/auth/register
// @desc Login user
// @access Public
router.post("/login", login);

export default router;
