const express = require("express");
const routes = express.Router();
const controller = require("./order.controller");

routes.post("/order/add", controller.postOrder);

module.exports = routes;