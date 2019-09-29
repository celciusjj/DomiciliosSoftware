const express = require("express");
const router = express.Router();
const controller = require("./product.controller");
const { validateToken } = require("../utils/auth");

router.get("/product", controller.retrieveProducts);
router.post("/product/add", validateToken, controller.postProduct);
router.put("/product/:productId", validateToken, controller.editProduct);
router.delete("/product/:productId", validateToken, controller.deleteProduct);
router.get("/product/:productId", validateToken, controller.getOneProduct);

module.exports = router;
