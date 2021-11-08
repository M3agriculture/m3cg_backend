const mongoose = require('mongoose');

const LorawanDevices = new mongoose.Schema({
    device_id: String,
    lat: Number,
    lng: Number,
    humidity: Number,
    temperature: Number,
    external_temperature: Number,
    reported_at: Number,
    uuid: String,
});

module.exports = mongoose.model("LorawanDevices", LorawanDevices);