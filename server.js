const express = require("express");
require("dotenv").config();
import initRouter from "./src/routes/index";
import connectDataBase from "./src/config/connectDB";

const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

initRouter(app);
connectDataBase();
const port = process.env.PORT || 8888;

app.listen(port, () => console.log(`Server started on port ${port}`));
