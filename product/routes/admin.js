// CORE PACKAGE

// THIRD-PARTY PACKAGES
const express = require("express");
const router = express.Router();

// CUSTOM PACKAGES

// CONTROLLERS
const productsController = require('../controllers/products');

router.get("/add-product", productsController.getAddProduct);

router.post("/add-product", productsController.postAddProduct);

module.exports = router;
