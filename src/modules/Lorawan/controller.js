const LorawanDevices = require('./model');

class LorawanController {
    static async allDevices(req, res) {
        try {
            LorawanDevices.aggregate([
                    { "$group": {
                        _id: "$device_id",
                        "lat": {
                            $first: "$lat"
                        },
                        "lng": {
                            $first: "$lng"
                        }
                    }}
                ], function(err, response) {
                    if (err) return res.status(400).json({ result: false, message: err });
                    return res.status(200).json({ result: true, devices: response });
                }
            );
        } catch (error) {
            return res.status(500).json({ result: false, error: error });
        }
    }
    static async devices(req, res) {
        try {
            const { device_id } = req.body;

            if (!(device_id)) {
                return res.status(400).json({ result: false, message: "Device id field is required" });
            }

            LorawanDevices.find({ device_id: device_id }, function (err, response) {
                if (err) return res.status(400).json({ result: false, message: err });
                return res.status(200).json({ result: true, readings: response });
            });
        } catch (error) {
            return res.status(500).json({ result: false, error: error });
        }
    }
}

module.exports = LorawanController;