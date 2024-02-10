const fetch = require("node-fetch");
const { WordTokenizer } = require("natural");


const countriesController = {
  getAllCountries: async (req, res) => {
    try {
      if (req.method === 'POST') {
        // Handle POST request to parse smart search text and return tokens
        const smartSearchText = req.body.smartSearchText || '';
        const tokenizer = new WordTokenizer();
        const tokens = tokenizer.tokenize(smartSearchText);

        // Return tokens as part of the response
        res.json({
          tokens: tokens,
        });
        console.log("Tokens:", tokens);
      } else {
        // Handle GET request to fetch data from the external API
        const response = await fetch("https://freetestapi.com/api/v1/countries");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Extract JSON data from the response
        const data = await response.json();

        const firstItem = data[0];

        const resObj = {};
        for (const key in firstItem) {
          if (firstItem.hasOwnProperty(key)) {
            resObj[key] = typeof firstItem[key]; // Add the data type information
          }
        }

        // Include tokens in the response along with other data
        res.json({
          attributeTypes: resObj,
          data: data,
        });
        console.log("Data from dummy API:", data);
      }
    } catch (error) {
      console.error("Error handling request:", error.message);
      res.status(500).send("Internal Server Error");
    }
  },
};

module.exports = countriesController;
