import { v4 } from "uuid";
import db from "../models";
require("dotenv").config();
var bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const salt = bcrypt.genSaltSync(10);
const hashPassword = (password) => bcrypt.hashSync(password, salt);

const registerService = async ({ userName, phone, password, res }) => {
  try {
    const response = await db.User.findOrCreate({
      where: { phone } || { userName },
      defaults: {
        phone,
        userName,
        password: hashPassword(password),
        id: v4(),
      },
    });
    const accessToken =
      response[0] &&
      jwt.sign(
        {
          id: response[0].id,
          phone: response[0].phone,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "2d" }
      );
    if (accessToken) {
      return {
        success: true,
        message: "User created successfully",
        accessToken,
      };
    }
    return {
      success: false,
      message: "User has already ",
    };
  } catch (error) {
    console.error(error);
  }
};

const loginService = async ({ phone, password }) => {
  try {
    const response = await db.User.findOne({
      where: { phone },
      raw: true,
    });
    const isCorrectPassword =
      response && bcrypt.compareSync(password, response.password);
    const accessToken =
      isCorrectPassword &&
      jwt.sign(
        { id: response.id, phone: response.phone },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "2d" }
      );

    if (accessToken) {
      return {
        success: true,
        message: "User logged in successfully",
        accessToken,
      };
    }
    return {
      success: false,
      message: "Phone number or password incorrect",
    };
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
module.exports = {
  registerService,
  loginService,
};
