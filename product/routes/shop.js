// CORE PACKAGE

// THIRD-PARTY PACKAGES
const express = require("express");
const router = express.Router();

// CUSTOM PACKAGES

// CONTROLLERS
const productsController = require('../controllers/products');

router.get("/", productsController.getProducts);

module.exports = router;