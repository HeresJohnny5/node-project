// CORE PACKAGE
const path = require('path');

// THIRD-PARTY PACKAGES
const express = require('express');
const router = express.Router();

// CUSTOM PACKAGES
const rootDir = require('../utils/path');

router.get('/add-product', (req, res, next) => {
  console.log('Add Product Path Middleware');
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  console.log('Product POST Middleware');
  console.log('req.body: ', req.body);
  res.redirect('/');
});

module.exports = router;