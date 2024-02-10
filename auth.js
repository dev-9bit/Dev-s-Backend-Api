  
const fetch = require('node-fetch');
const express = require('express');
const app = express();


const cors = require('cors');
app.use(cors());


const PORT = 9000;

// GET request


app.get('/api/data', (req, res) => {
    fetch('c')
      .then((response) => response.json()) 
      .then((data) => {
        dataArray.push(data); 
        console.log('GET Response:', data);
        res.json(dataArray); 
      })
      .catch((error) => {
        console.error('GET Error:', error);
        res.status(500).json({ error: 'Internal Server Error' }); 
      });
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log(data)
  });



// POST request
const postData = {
    key1: 'value1',
    key2: 'value2'
};

fetch('https://example.com/api/endpoint', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
})
    .then((response) => response.text())
    .then((body) => {
        console.log('POST Response:', body);
    })
    .catch((error) => {
        console.error('POST Error:', error);
    });




    // const myDataObject = {
    //   "name": "pragati-todo",
    //   "status": "Not-completed"
    // };
    
    // const putData = async ( ) =>{
    //   const apiResponse = await fetch('http://192.168.1.4:9002/askdb/entity/todos', {
    //        method: 'PUT', 
    //        headers: {
    //          'Content-Type': 'application/json'
    //        },
    //        body: JSON.stringify(myDataObject)
    //    });
    
    //    const apiData = await apiResponse.json();
    //    res.json(apiData);
    
    //   // now do whatever you want with the data  
    //    console.log(data);
    // };
    // putData( );

    // app.delete('/api/Data/:id', async (req, res) => {
    //   try {
    //     const dataId = req.params.id;
    
    //     const apiResponse = await fetch(`http://192.168.1.4:9003/askdb/entity/todos/${dataId}`, {
    //       method: 'DELETE',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     });
    
    //     // Check if the response has a body before attempting to parse JSON
    //     const apiData = apiResponse.status === 204 ? {} : await apiResponse.json();git
    
    //     console.log(apiData);
    
    //     res.json(apiData);
    //   } catch (error) {
    //     console.error('Error deleting data:', error);
    //     res.status(500).json({ success: false, error: error.message });
    //   }
    // });
    