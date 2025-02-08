// backend/index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const wooRoutes = require('./routes/woocommerce');
const orderRoutes = require('./routes/orders');
const config = require('./config/config');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json

// Routes
app.use('/api/woocommerce', wooRoutes);
app.use('/api/orders', orderRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});