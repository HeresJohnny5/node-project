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
  res.render('shop');
  // the render method will use the default templating engine setup in the index.js configuration setupand return that template
});

module.exports = router;
