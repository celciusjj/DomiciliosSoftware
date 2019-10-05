const express = require("express");
const routes = express.Router();
const controller = require("./order.controller");

//TODO: Don't forget the authorization token
routes.post("/order/add", controller.postOrder);
routes.get("/orders", controller.getOrders);
routes.delete("/order/:id", controller.deleteOrder);

module.exports = routes;
