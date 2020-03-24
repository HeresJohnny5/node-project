// CORE PACKAGE
const path = require('path');

// THIRD-PARTY PACKAGES
const express = require('express');
const router = express.Router();

// CUSTOM PACKAGES
const rootDir = require('../utils/path');

// LOCAL FILES
const adminData = require('./admin');

router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', { prods: products, docTitle: 'Shop', path: '/' });
  // the render method will use the default templating engine setup in the index.js configuration setupand return that template
  // you can pass a second argument to the render method that allows you to pass in data that should be added into the view. You pass the data as a JavaScript object where you map it to a key name which can then be used in the template to refer to the data being passed
});

module.exports = router;
