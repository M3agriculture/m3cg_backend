const LorawanDevices = require('./model');

class LorawanController {
    static async devices(req, res) {
        try {
            LorawanDevices.find({}).then(function (err, devices) {
                if(err) {
                    res.json(err);
                } else {
                    res.json(devices);
                }
            });
        } catch (error) {
            res.json(error);
        }
    }
}

module.exports = LorawanController;