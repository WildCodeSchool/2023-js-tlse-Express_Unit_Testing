// import React from 'react';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connection = require('../db-config');
const routes = require('./routes/router.js');

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to database', err);
  } else {
    console.log('Connected as id ' + connection.threadId);
  }
});

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routes);

// Please keep this module.exports app, we need it for the tests !
module.exports = app;
