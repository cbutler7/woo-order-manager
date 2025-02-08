// backend/routes/woocommerce.js
const express = require('express');
const axios = require('axios');
const router = express.Router();
const config = require('../config/config'); // Load environment variables

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const WooCommerce = new WooCommerceRestApi({
  url: config.WOO_API_URL, // Your store URL
  consumerKey: config.WOO_API_KEY, // Your consumer key
  consumerSecret: config.WOO_API_SECRET, // Your consumer secret
  version: 'wc/v3'
});

router.get('/order-statuses', async (req, res) => {
  try {
    const response = await WooCommerce.get('orders/statuses');
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching order statuses: ", error);
    res.status(500).json({ error: 'Failed to fetch order statuses' });
  }
});

router.get('/orders', async (req, res) => {
  try {
    const response = await WooCommerce.get('orders', { per_page: 100 }); // Adjust per_page as needed
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching orders: ", error);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

module.exports = router;