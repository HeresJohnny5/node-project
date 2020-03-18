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
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
