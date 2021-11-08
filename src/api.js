const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const basePath = '/api';
const api = express();
const port = process.env.PORT || 8080;
api.use(basePath, require('./routes'));

mongoose.connect(
    process.env.DB_CONNECTION_STRING,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (req, res) => {
        console.log('DB connected');
    }
);
api.listen(port, () => console.log('Up & running'));