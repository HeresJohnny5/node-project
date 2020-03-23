// CORE PACKAGE
const path = require('path');

// THIRD-PARTY PACKAGES
const express = require('express');
const router = express.Router();

// CUSTOM PACKAGES
const rootDir = require('../utils/path');

const products = [];

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  products.push({
    title: req.body.title
  });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;