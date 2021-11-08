const express = require("express");
const router = express.Router();

/** Controllers */
const LorawanController = require('../modules/Lorawan/controller');

router.get('/lorawan-devices', LorawanController.devices);

module.exports = router;