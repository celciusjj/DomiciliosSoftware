const express = require("express");
const routes = express.Router();
const controller = require("./users.controller");

routes.post("/signUp", controller.addUser);
routes.post("/signIn", controller.authUser);
routes.get("/delivers", controller.getDeliveries);

module.exports = routes;
