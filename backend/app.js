const express = require('express');
const cloudinary = require('./config/cloudinary');

const app = express();

app.use(express.json());

app.get('/cloudinary-test', (req, res) => {
  res.json({
    cloud_name: cloudinary.config().cloud_name,
  });
});

module.exports = app;
