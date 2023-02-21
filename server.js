require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
global.__basedir = __dirname;

let port = process.env.PORT || 8081;
var corsOptions = {
  origin: `http://localhost:${port}`
};

app.use(cors(corsOptions));

const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);


app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});