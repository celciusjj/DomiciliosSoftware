const express = require("express");
const routes = express.Router();
const controller = require("./order.controller");

//TODO: Don't forget the authorization token
routes.post("/order/add", controller.addOrder);
routes.get("/orders", controller.getOrders);
routes.delete("/order/:id", controller.deleteOrder);
routes.get("/order/:userId", controller.getOrdersByUser);
routes.put("/order/:orderId", controller.updateOrderState);
routes.get("/ordersDelivered", controller.getOrdersDelivered);
routes.get("/ordersByState", controller.getOrdersByState);

module.exports = routes;
