// CORE PACKAGE
const path = require("path");

// THIRD-PARTY PACKAGES
const express = require("express");
const router = express.Router();

// CUSTOM PACKAGES
const rootDir = require("../utils/path");

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    docTitle: "Add Product",
    path: "/admin/add-product",
    activeAddProduct: true,
    productCSS: true,
    formsCSS: true
  });
});

router.post("/add-product", (req, res, next) => {
  products.push({
    title: req.body.title
  });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
