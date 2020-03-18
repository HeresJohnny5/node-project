// CORE PACKAGE
const path = require('path');

// THIRD-PARTY PACKAGES
const express = require('express');
const router = express.Router();

// CUSTOM PACKAGES
const rootDir = require('../utils/path');

router.get('/', (req, res, next) => {
  console.log('Home Page Middleware');
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
