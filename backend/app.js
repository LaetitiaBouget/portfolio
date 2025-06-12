const express = require('express');
const cloudinary = require('./config/cloudinary');
const projectRoutes = require('./routes/projectRoutes');

const app = express();

app.use(express.json());

app.use('/api/projects', projectRoutes);

module.exports = app;
