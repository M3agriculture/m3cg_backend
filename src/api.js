const express = require('express');
require("./config/database").connect();

const basePath = '/api';
const api = express();
const port = process.env.PORT || 8080;
api.use(express.json());
api.use(basePath, require('./routes'));

api.listen(port, () => console.log('Up & running'));