import {v4} from "uuid";
import db from "../models";
import {Op} from "sequelize";

require("dotenv").config();
var bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const salt = bcrypt.genSaltSync(10);
const hashPassword = (password) => bcrypt.hashSync(password, salt);

const registerService = async ({name, phone, password}) => {
    try {
        const existingUser = await db.User.findOne({
            where: {
                [Op.or]: [
                    {phone: phone},
                ]
            }
        });
        const response = !existingUser && await db.User.create({
            phone,
            name,
            zalo: phone,
            password: hashPassword(password),
            id: v4(),
        });
        const accessToken =
            response &&
            jwt.sign(
                {
                    id: response.id,
                    phone: response.phone,
                },
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: "2d"}
            );
        if (accessToken)
            return {
                success: !!accessToken,
                message: accessToken ? "User register in successfully" : "Phone number or password already registered",
                accessToken: accessToken || null,
            };
        return false
    } catch (error) {
        console.log(error)
    }
};

const loginService = async ({phone, password}) => {
    try {
        const response = await db.User.findOne({
            where: {phone},
            raw: true,
        });
        const isCorrectPassword =
            response && bcrypt.compareSync(password, response.password);
        const accessToken =
            isCorrectPassword &&
            jwt.sign(
                {id: response.id, phone: response.phone},
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: "2d"}
            );
        if (accessToken)
            return {
                success: !!accessToken,
                message: accessToken ? "User logged in successfully" : "Phone number or password incorrect",
                accessToken: accessToken || null,
            };
        return false
    } catch (error) {
        console.log(error)
    }
};
module.exports = {
    registerService,
    loginService,
};
