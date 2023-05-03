"use strict";

// {
//   "development": {
//     "username": "root",
//     "password": null,
//     "database": "phongtro123",
//     "host": "127.0.0.1",
//     "dialect": "mysql",
//     "logging": false
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }
require("dotenv").config(); // this is important!
module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
    host: process.env.DB_HOST,
    // port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    timezone: "+07:00"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: false,
    timezone: "+07:00",
    protocol: process.env.DB_DIALECT,
    dialectOptions: {
      connectTimeout: 60000,
      // 60 seconds
      requestTimeout: 60000,
      // 60 seconds
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};