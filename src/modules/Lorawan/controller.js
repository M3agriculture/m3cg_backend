const LorawanDevices = require('./model');
// const ObjectId = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;

const moment = require('moment')
class LorawanController {
    static async allDevices(req, res) {
        try {
            LorawanDevices.aggregate([
                {
                    "$group": {
                        _id: "$device_id",
                        "lat": {
                            $first: "$lat"
                        },
                        "lng": {
                            $first: "$lng"
                        }
                    }
                }
            ], function (err, response) {
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
    static async devicesTimeSlots(req, res) {
        //device_id
        //single date or date-range
        try {
            let { device_id, startDate, endDate,hightest_temp } = req.body;
            if (!(device_id)) {
                return res.status(400).json({ result: false, message: "Device id field is required" });
            }
            // if (!(hightest_temp)) {
            //     return res.status(400).json({ result: false, message: "Highest Temprature field is required" });
            // }
            let query = { temperature: { $gte: 55,$lte:80 } }
            // let query={}
            if (device_id)
                query.device_id = device_id

           
            if (startDate) {
                query.reported_at = { $gte: Number(moment(startDate).format('x')) }
            }
            if (startDate && endDate) {
                query.reported_at = { $gte: Number(moment(startDate).format('x')), $lte: Number(moment(endDate).format('x')) }
            }
            if (hightest_temp) {
                query.temperature = { $gte: parseFloat(hightest_temp) }
            }

            console.log(query)
            let response = await LorawanDevices.aggregate([{
                $match: { ...query }
            },
            {
                $project: {
                    _id: 1,
                    reported_at: 1,
                }
            }
            ])

            let timeSlots = [];
            response.forEach(item => {
                let time = moment(item.reported_at).format("HH:mm:ss")
                timeSlots.push(time);
            })
            return res.status(200).json({ result: true, time_slots: timeSlots });
        } catch (error) {
             return res.status(500).json({ result: false, error: error });
        }
        //[6:00,13:00,17:00]
    }

}

module.exports = LorawanController;