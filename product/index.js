// CORE PACKAGE
const path = require("path");

// THIRD-PARTY PACKAGES
const express = require("express");
// const expressHbs = require("express-handlebars");
const app = express();
const bodyParser = require("body-parser");

// CUSTOM ROUTES
const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");

// STATIC STYLES
app.use(express.static(path.join(__dirname, "public")));

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));

// CONFIGURATION FOR PUG
// app.set("view engine", "pug");
// The pug template engine ships with built-in express support
// app.set("views", "views");

// CONFIGURATION FOR EXPRESS-HANDLEBARS
// app.engine(
//   "handlebars",
//   expressHbs({
//     defaultLayout: "main-layout",
//     extname: "handlebars",
//     layoutsDir: "views/layouts/"
//   })
// );
// app.set("view engine", "handlebars");
// app.set("views", "views");

// CONFIGURATION FOR EJS
app.set("view engine", "ejs");
app.set("views", "views");

// ROUTES
app.use("/admin", adminRoutes.routes);
// admin is a common starting segment and thus it does not need added to the routes located in the adminRoutes object imported
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404);
  res.render("404", { docTitle: "404", path: "/admin/add-product" });
});

app.listen(3000);
