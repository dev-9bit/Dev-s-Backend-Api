const express = require('express');
const http = require('http');
const app = express();

const cors = require('cors');
app.use(cors());

const port = 9000;


const sampleData = {
    "xAxis": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    "yAxis": [{
        "id": "loyalCustomers",
        "data": [100, 200, 300]
    },
    {
        "id": "newCustomers",
        "data": [300,200,100]
    },
    {
        "id": "uniqueCustomers",
        "data": [400,100,300,200]
    },
    {
      "id": "royalCustomers",
      "data": [100, 400, 300]
  },{
    "id": "oldCustomers",
    "data": [200, 700, 900]
}]
}

app.get('/chart/visitor-insight/monthly', (req, res) => {
  res.json(sampleData);
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
