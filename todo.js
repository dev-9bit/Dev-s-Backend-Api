const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const cors = require('cors');
app.use(cors());
app.use(compression());
app.use(bodyParser.json());

const PORT = process.env.PORT || 9000;



app.get('/api/Data', async (req, res) => {
  try {
    let dataArray = [];
    let initialDataFetched = false;

    if (!initialDataFetched) {
      // Action 1: Fetch data from the external API
      const apiResponse = await fetch('http://192.168.1.22:9003/askdb/entity/todos');
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


// POST method to add new data

app.post('/api/Data', async (req, res) => {
  try {
    const requestData = req.body;

    const apiResponse = await fetch('http://192.168.1.22:9003/askdb/entity/todos', {
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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//Put

app.put('/api/Data/:id', async (req, res) => {
  try {
    const dataId = req.params.id;
    const requestData = req.body;

    const apiResponse = await fetch(`http://192.168.1.22:9003/askdb/entity/todos/${dataId}`, {
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

//Delete

// DELETE method to remove data

app.delete('/api/Data/:id', async (req, res) => {
  try {
    const dataId = req.params.id;

    const apiResponse = await fetch(`http://192.168.1.22:9003/askdb/entity/todos/${dataId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      
      
    });

    const apiData = apiResponse.status === 204 ? {} : await apiResponse.json();
    console.log(apiData)
    
    res.json(apiData);
  } catch (error) {
    console.error('Error deleting data:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});
