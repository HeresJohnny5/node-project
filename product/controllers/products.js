const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    docTitle: "Add Product",
    path: "/admin/add-product",
    activeAddProduct: true,
    productCSS: true,
    formsCSS: true
  });
}

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("shop", {
      prods: products,
      docTitle: "Shop",
      path: "/",
      activeShop: true,
      productCSS: true
    });
    // the render method will use the default templating engine setup in the index.js configuration setupand return that template
    // you can pass a second argument to the render method that allows you to pass in data that should be added into the view. You pass the data as a JavaScript object where you map it to a key name which can then be used in the template to refer to the data being passed
  });
}