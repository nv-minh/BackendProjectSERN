const {Sequelize} = require("sequelize");
require("dotenv").config();

// Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize("phongtro123", "root", null, {
//   host: process.env.DB_HOST,
//   dialect: process.env.DB_DIALECT,
//   // port: process.env.PORT_SV,
//   logging: false,
// });

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
    process.env.DB_DATABASE_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        logging: false,
        query: {
            raw: true,
        },
        // protocol: process.env.DB_DIALECT,
        // dialectOptions: {
        //   connectTimeout: 60000, // 60 seconds
        //   requestTimeout: 60000, // 60 seconds
        //   ssl: {
        //     require: true,
        //     rejectUnauthorized: false,
        //   },
        // },
        timezone: "+07:00",
    }
);
const connectDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

export default connectDatabase;
