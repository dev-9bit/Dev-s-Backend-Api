// const express = require('express');
// const app = express();
// const port = 9000; 


// app.get('/dashboard/data', (req, res) => {
    
//     const data = {
//         key1: 'Dev1',
//         key2: 'Dev2',
        
//     };

    
//     res.json(data);
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });


// netsh interface portproxy add v4tov4 listenport=9000 listenaddress=0.0.0.0 connectport=9000 connectaddress=192.168.44.82
// New-NetFirewallRule -DisplayName "WSL2 Port Bridge" -Direction Inbound -Action Allow -Protocol TCP -LocalPort 80,443,10000,3000,5000,9000


// fatch - https://oxylabs.io/blog/nodejs-fetch-api


// 192.168.1.5
// app.get('/api/fetch', async (req, res) => {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
  
//       const data = await response.json();
   
//       res.json(data);
//     } catch (error) {
//       console.error('Error fetching data:', error.message);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });

//   1-  req a empty get api from client to server 
//   2 - req server fetch data frome the external api 
//   3 - res recive data
//   4 -  res send response server to client

//   https://deadsimplechat.com/blog/nodejs-fetch-api/#get-requests-with-node-fetch-api

