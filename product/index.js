// CORE PACKAGE
const path = require("path");

// THIRD-PARTY PACKAGES
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// CUSTOM ROUTES
const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");

// CONTROLLERS
const errorController = require("./controllers/404");

// STATIC STYLES
app.use(express.static(path.join(__dirname, "public")));

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));

// CONFIGURATION FOR EJS
app.set("view engine", "ejs");
app.set("views", "views");

// ROUTES
app.use("/admin", adminRoutes);
// admin is a common starting segment and thus it does not need added to the routes located in the adminRoutes object imported
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
