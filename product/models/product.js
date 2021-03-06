// CORE PACKAGE
const fs = require("fs");
const path = require("path");

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    const p = path.join(
      path.dirname(process.mainModule.filename), 
      'data', 
      'products.json'
    );

    fs.readFile(p, (err, fileContent) => {
      let products = [];

      if (!err) {
        products = JSON.parse(fileContent);
      }

      products.push(this);

      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    const p = path.join(
      path.dirname(process.mainModule.filename), 
      'data', 
      'products.json'
    );

    fs.readFile(p, 'utf-8', (err, fileContent) => {
      if (err) {
        cb([]);
      } else {
        if (fileContent === '') {
          cb([]);
        } else {
          cb(JSON.parse(fileContent));
        }
      }
    });
  }
  // The static keyword defines a static method for a class. Static methods aren't called on instances of the class. Instead, they're called on the class itself. These are often utility functions, such as functions to create or clone objects.
}