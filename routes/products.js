const express = require('express')
const router = express.Router();
const axios = require('axios');

const externalUrl = 'https://dummyjson.com/products'
// Define a GET endpoint for getting a list of products
router.get('/', async (req, res) => {
    try {
      const response = await axios.get(`${externalUrl}`, {
        headers: { 'app-id': 'dummy-app-id' },
      });
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving product information');
    }
  });
  // Define a GET endpoint for getting a single product by ID
  router.get('/:id', async (req, res) => {
      const productId = req.params.id;
      try {
        const response = await axios.get(`${externalUrl}/${productId}`, {
          headers: { 'app-id': 'dummy-app-id' },
        });
        res.json(response.data);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving product information');
      }
    });
    
    // Define a PUT endpoint for editing a product by ID
    router.put('/:id', async (req, res) => {
      const productId = req.params.id;
      const updatedProduct = req.body;
      try {
        const response = await axios.put(`${externalUrl}/${productId}`, updatedProduct, {
          headers: { 'app-id': 'dummy-app-id' },
        });
        res.json(response.data);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error updating product information');
      }
    });
    
    // Define a DELETE endpoint for deleting a product by ID
    router.delete('/del/:id', async (req, res) => {
      const productId = req.params.id;
      try {
        const response = await axios.delete(`${externalUrl}/${productId}`, {
          headers: { 'app-id': 'dummy-app-id' },
        });
        res.json(response.data);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting product information');
      }
    });

module.exports = router;