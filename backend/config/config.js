// backend/config/config.js

require('dotenv').config();

module.exports = {
  WOO_API_URL: process.env.WOO_API_URL,
  WOO_API_KEY: process.env.WOO_API_KEY,
  WOO_API_SECRET: process.env.WOO_API_SECRET,
  EMAIL_HOST: process.env.EMAIL_HOST,
  EMAIL_PORT: process.env.EMAIL_PORT,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD
};