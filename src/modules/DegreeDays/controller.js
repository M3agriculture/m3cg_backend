// const ObjectId = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const moment = require('moment')
const LorawanDevices = require('../Lorawan/model.js');




class DegreeCalculator {


    static async getDegreeDays(req, res) {
        try {

            let device_id = req.query.sensor_id
            let Tu = 88;
            let Tl = 50;
            let query = {}
            let startDate = moment.utc().startOf('day');
            let endDate = moment.utc().endOf('day');
            query.device_id = device_id
            query.reported_at = { $gte: Number(moment(startDate).format('x')), $lte: Number(moment(endDate).format('x')) }
            let devices = await LorawanDevices.find(query)

            let temp_arr = []
            let time_arr=[]
            devices.map(device => {
                temp_arr.push(device.temperature)
                time_arr.push(moment(device.reported_at).format("HH:mm:ss"))
                 console.log("Device", device)
            })
            let min_temp = Math.min(...temp_arr);
            let max_temp = Math.max(...temp_arr);
            let alpha=(max_temp-min_temp)/2;
 
            let DegreeDay = 0;
            let Tmin = min_temp; let Tmax = max_temp;
            if (min_temp > Tu && max_temp > Tl) {
                console.log("1")
                let O1 = 1 / Math.sin((Tu - (Tmax + Tmin / 2)) / alpha)
                let O2 = 1 / Math.sin((Tu - (Tmax + Tmin / 2)) / alpha)
                let part1 = (((Tmax + Tmin) / 2) - Tl) * (O2 - O1);
                let part2 = alpha * (Math.cos(O1) - Math.cos(O2))
                let part3 = ((Tu - Tl) * ((3.14 / 2) - O2))
                console.log(part2, part3)
                DegreeDay = (1 / 3.14) * (part1 + part2 + part3)

            } else if (min_temp > Tu && max_temp < Tl) {
                console.log("2")

                let O1 = 1 / Math.sin((Tu - (Tmax + Tmin / 2)) / alpha)
                let O2 = 1 / Math.sin((Tu - (Tmax + Tmin / 2)) / alpha)
                let part1 = (((Tmax + Tmin) / 2) - Tl) * (O2 - O1);
                let part2 = alpha * (Math.cos(O1) - Math.cos(O2))
                let part3 = ((Tu - Tl) * ((3.14 / 2) - O2))
                DegreeDay = (1 / 3.14) * (part1 + part2 + part3)
            } else if (min_temp < Tu && max_temp > Tl) {
                console.log("3")
                DegreeDay = ((Tmax + Tmin) / 2) - Tl
            } else if (min_temp < Tu && max_temp < Tl) {
                console.log("4")
                let O1 = 1 / Math.sin((Tl - (Tmax + Tmin / 2)) / alpha)
                let part1 = (((Tmax + Tmin) / 2) - Tl) * ((3.14 / 2) - O1);
                let part2 = ((alpha) * (Math.cos(O1)))
                DegreeDay = (1 / 3.14) * (part1 + part2)

            } else if (min_temp > Tu && max_temp > Tl) {
                console.log("5")
                DegreeDay = Tu - Tl
            } else if (min_temp < Tu && max_temp < Tl) {
                console.log("6")
                DegreeDay = 0;
            }
            return res.status(200).json({ result: true, degree_day: DegreeDay, tempratues: temp_arr,times:time_arr });

        } catch (error) {
            console.log(error)
            return res.status(500).json({ result: false, error: error });
        }
    }
}

module.exports = DegreeCalculator;