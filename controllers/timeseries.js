const express = require('express');
const fs = require('fs');
const csvtojson = require('csvtojson');
const app = express();

// Define endpoint to get all data
app.get('/api/data', (req, res) => {
  // Read the CSV file and parse its data
  fs.readFile('./controllers/ElectricProduction.csv', function (err, fileData) {
    if (err) {
      console.error('Error reading CSV file:', err);
      return res.status(500).send('Error reading CSV file');
    }

    try {
      // Convert CSV data to JSON
      csvtojson().fromString(fileData.toString()).then((jsonArray) => {
        // Transform JSON data to the desired format
        const transformedData = jsonArray.map(row => ({
          x: row['DATE'], // Assuming 'DATE' is the column containing dates
          y: parseFloat(row['IPG2211A2N']) // Assuming 'IPG2211A2N' is the column containing numbers
        }));

        console.log('CSV file successfully processed');
        
        // Send the transformed data as JSON response
        res.json(transformedData);
      }).catch(error => {
        console.error('Error parsing CSV data:', error);
        res.status(500).send('Error parsing CSV data');
      });
    } catch (parseError) {
      console.error('Error parsing CSV data:', parseError);
      res.status(500).send('Error parsing CSV data');
    }
  });
});

// Export the Express app
module.exports = app;
