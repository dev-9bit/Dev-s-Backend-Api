const express = require("express");
const fetch = require("node-fetch");
const app = express();


const cors = require('cors')
app.use(cors())


const getCarInfoController = {
  getCarInfo: async (req, res) => {
    try {
      const response = await fetch(
        "https://private-anon-703a52772b-carsapi1.apiary-mock.com/manufacturers"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Extract JSON data from the response
      //       const data = await response.json();
      // const firstItem=  data[0]

      // const resObj = {};
      // Object.keys(firstItem)
      //       for (key in firstItem) {
      //         if (firstItem.hasOwnProperty(key)) {
      //           res[key] = firstItem[key]

      //         }
      //       }
      //       console.log(resObj)
      const data = await response.json();
      const firstItem = data[0];

      const resObj = {};
      for (key in firstItem) {
        if (firstItem.hasOwnProperty(key)) {
          resObj[key] =
            // value: firstItem[key],
            typeof firstItem[key]; // Add the data type information
        }
      }
      console.log(resObj);

      const modifiedData = data.map((car) => ({
        ...car,
        avg_horsepower: Math.round(car.avg_horsepower),
        avg_price: Math.round(car.avg_price),
      }));
      // Send the data as JSON to the client
      res.json({
        attributeTypes: resObj,
        data: modifiedData,
      });
      console.log("Data from dummy API:", data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      res.status(500).send("Internal Server Error");
    }
  },
  // New POST endpoint for handling data
  postCarInfo: async (req, res) => {
    try {
      // Access POST data from the request body
      const postData = req.body;
      const apiResponse = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const apiData = await apiResponse.json();
      res.json(apiData);
      // Handle the data as needed (modify, save to database, etc.)
      // For demonstration purposes, let's just log the received data
      // console.log("Received POST data:", postData);

      // Send a response back to the client
      // res.json({ message: 'Data received successfully' });
    } catch (error) {
      console.error("Error handling POST data:", error.message);
      res.status(500).send("Internal Server Error");
    }
  },
};

module.exports = getCarInfoController;
