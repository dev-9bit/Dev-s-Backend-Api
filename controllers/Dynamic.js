const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();



router.get('/', async (req, res) => {
  try {
    let dataArray = [];
    let initialDataFetched = false;

    if (!initialDataFetched) {
      // Action 1: Fetch data from the external API
      const apiResponse = await fetch('http://192.168.1.22:9003/askdb/entity/sales');
      const apiData = await apiResponse.json();

      if (apiData && apiData.length > 0) {
        dataArray = apiData;
      } else {
        console.log('apiData shows empty.');
      }

      initialDataFetched = true;
    }

    res.json(dataArray);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const requestData = req.body;

    const apiResponse = await fetch('http://192.168.1.22:9003/askdb/entity/sales', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    const apiData = await apiResponse.json();
    res.json(apiData);
  } catch (error) {
    console.error('Error adding data:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const dataId = req.params.id;
    const requestData = req.body;

    const apiResponse = await fetch(`http://192.168.1.22:9003/askdb/entity/sales/${dataId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    const apiData = await apiResponse.json();
    res.json(apiData);
  } catch (error) {
    console.error('Error updating data:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const dataId = req.params.id;

    const apiResponse = await fetch(`http://13.233.137.136:9001/askdb/entity/sales/${dataId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const apiData = apiResponse.status === 204 ? {} : await apiResponse.json();
    console.log(apiData);
    
    res.json(apiData);
  } catch (error) {
    console.error('Error deleting data:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
