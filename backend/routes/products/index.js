const express = require("express");
const routes = express.Router();
const controller = require("./product.controller");

routes.get("/product", controller.retrieveProducts);
routes.post("/product/add", controller.postProduct);

module.exports = routes;