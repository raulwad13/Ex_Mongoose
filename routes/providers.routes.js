const express = require("express");
const routerProviders = express.Router();
const providersControllers = require("../controllers/providers.controllers");

// POST
routerProviders.post("/", providersControllers.createProviders);

// GET
routerProviders.get("/", providersControllers.getProviders);

// PUT
routerProviders.put("/", providersControllers.editProviders);

// DELETE
routerProviders.delete("/", providersControllers.deleteProviders);

module.exports = routerProviders;
