const express = require("express");
const routes = express.Router();
const controller = require("./order.controller");

//Don't forget the authorization token
routes.post("/order/add", controller.postOrder);
routes.get("/orders", controller.getOrders);

module.exports = routes;
