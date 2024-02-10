// app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


// Middleware for parsing URL-encoded and JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS middleware with specific configuration
const corsOptions = {
  origin: '*', // Allow requests from all origins
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));



// Import individual route modules
const carsRoutes = require('./routes/carsRoutes.js');
const countriesRoute = require('./routes/countriesRoute.js');
const countriesController = require('./controllers/countriesControllers.js');

// Use the individual route modules
app.use('/v1/cars', carsRoutes);
app.use('/v2/countries', countriesRoute);

app.post('/v2/countries', countriesController.getAllCountries);


// Import authentication routes
const authRoutes = require('./controllers/auth.js');
app.use('/authenticate', authRoutes);

// Import timeseries app
const timeseriesApp = require('./controllers/timeseries.js');
app.get('/api/data', timeseriesApp);

// Import Dynamic app
const dynamicRoutes = require('./controllers/Dynamic.js');
app.use('/user', dynamicRoutes);

// Import chart.js
const chartRoutes = require('./controllers/chart.js');
app.use('/chart', chartRoutes);

// Import todo.js
const todosRoutes = require('./controllers/todo.js');
app.use('/todo', todosRoutes);

// Define a route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello, this is your Express server!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

// Set the server to listen on port 3000
const PORT = process.env.PORT || 9000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});

const clearUserDataRouter = require('./controllers/clear.js');

// Use the router
app.use('/user', clearUserDataRouter);
