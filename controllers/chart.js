const express = require('express');
const router = express.Router();

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
};

const sampleData1 = {
    "data": [
      {
        "z": [
          [10, 20, 30, 40],
          [20, 30, 40, 50],
          [30, 40, 50, 60],
          [40, 50, 60, 70]
        ]
      }
    ],
    "layout": {
      "xaxis": {
        "tickvals": [0, 1, 2, 3],
        "ticktext": ["Category 1", "Category 2", "Category 3", "Category 4"]
      },
      "yaxis": {
        "tickvals": [0, 1, 2, 3],
        "ticktext": ["Day 1", "Day 2", "Day 3", "Day 4"]
      }
    }
  }
  


router.get('/visitor-insight/monthly', (req, res) => {
  res.json(sampleData);
});


router.get('/heatmap-data', (req, res) => {
    res.json(sampleData1);
  });

module.exports = router;
