const express = require("express");
const router = express.Router();

//import middleware
const authMiddleware = require("../middleware/auth");

/** Controllers */
const LorawanController = require('../modules/Lorawan/controller');
const UserController = require('../modules/User/controller');

router.get('/all-devices', authMiddleware, LorawanController.allDevices);
router.post('/devices-readings', authMiddleware, LorawanController.devices);

// Login
router.post("/login", UserController.login);

module.exports = router;