const express = require("express");
const router = express.Router();
// const axios = require("axios");
const fetch = require("node-fetch");
const getCarInfoController = require("../controllers/carsController")


const getCars = router.get("/",getCarInfoController.getCarInfo);
const postCarInfo= router.post("/",getCarInfoController.postCarInfo);

module.exports = getCars,postCarInfo;
