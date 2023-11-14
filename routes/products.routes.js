const productsController = require('../controllers/products.controller');
const routerProducts = require('express').Router();



// POST
routerProducts.post("/", productsController.createProduct);

// GET
routerProducts.get("/", productsController.getProduct);

// PUT
routerProducts.put("/", productsController.editProduct);

// DELETE
routerProducts.delete("/", productsController.deleteProduct);

module.exports = routerProducts;