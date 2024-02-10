const express = require('express');
const router = express.Router();
const fetch = require('node-fetch'); // Require node-fetch

router.delete('/', async (req, res) => {
  try {
    // Make a DELETE request to the specified URL
    const apiResponse = await fetch('http://192.168.1.6:9000/user', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Check if the response status is 204 (No Content)
    if (apiResponse.status === 204) {
      // Data cleared successfully
      res.status(200).json({ success: true, message: 'Data cleared successfully.' });
    } else {
      // Handle other response statuses
      const responseData = await apiResponse.json();
      res.status(apiResponse.status).json({ success: false, message: responseData.message });
    }
  } catch (error) {
    // Handle errors
    console.error('Error clearing data:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
