const express = require('express');
require("./config/database").connect();
const cors = require('cors')
const path = require('path');
const basePath = '/api';
const api = express();
const port = process.env.PORT || 8080;
api.use(express.json());
api.use(cors())
api.use(basePath, require('./routes'));
// Front Site Build Path
api.use('/', express.static(path.join(__dirname, '../build')))
api.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});


api.listen(port, () => console.log('Up & running'));