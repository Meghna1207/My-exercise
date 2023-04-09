const express = require('express');
const axios = require('axios');
const products = require('./routes/products');

// Create an instance of the express application
const app = express();  
  
// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
  
app.use('/products', products);