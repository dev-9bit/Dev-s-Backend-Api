const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const countriesController = require("../controllers/countriesControllers")

const getCountries = router.get("/",countriesController.getAllCountries);
  
  module.exports = getCountries;
  