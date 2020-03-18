// CORE PACKAGE
const path = require('path');

// THIRD-PARTY PACKAGES
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// CUSTOM ROUTES
const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');

// STATIC STYLES
app.use(express.static(path.join(__dirname, 'public')));

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES
app.use('/admin', adminRoutes.routes);
// admin is a common starting segment and thus it does not need added to the routes located in the adminRoutes object imported
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404);
  res.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);