const express = require('express');
const app = express();
const tmp = require('./api/routes/temp');
app.use('/temp', tmp);

module.exports = app;