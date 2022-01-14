const express = require("express");
const router = express.Router();

//import middleware
const authMiddleware = require("../middleware/auth");

/** Controllers */
const LorawanController = require('../modules/Lorawan/controller');
const DegreeDayController = require('../modules/DegreeDays/controller');
const UserController = require('../modules/User/controller');

router.get('/all-devices', authMiddleware, LorawanController.allDevices);
router.post('/devices-time-slots', authMiddleware, LorawanController.devicesTimeSlots);
router.post('/devices-readings', authMiddleware, LorawanController.devices);
router.get('/degree-days', DegreeDayController.getDegreeDays);
router.get('/degree-days-both-threshold', DegreeDayController.getDegreeDaysBothThreshold);
router.get('/degree-days-entirely-both-threshold', DegreeDayController.getDegreeDaysForEntirelyBothThreshold);
router.get('/degree-days-intercepted-lower-threshold', DegreeDayController.getInterceptedLowerThreshold);
router.get('/degree-days-Above-both-threshold', DegreeDayController.getDegreeDaysAboveBothThreshold);
router.get('/degree-days-Below-both-threshold', DegreeDayController.getDegreeDaysBelowBothThreshold);


// Login
router.post("/login", UserController.login);

module.exports = router;