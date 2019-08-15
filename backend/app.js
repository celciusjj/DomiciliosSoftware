const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const setUpRoutes = require("./routes");


setUpRoutes(app);

module.exports = app;
