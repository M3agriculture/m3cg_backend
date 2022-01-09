// const ObjectId = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const moment = require('moment')


class DegreeCalculator {
    static async getDegreeDays(req, res) {
        try {
            
            let Tu = 88; let Tl = 50; let Tmax = Number(req.query.min_temp); let Tmin = Number(req.query.max_temp); let alpha = 1;
            if (!(Tmax)) {
                return res.status(400).json({ result: false, message: "Mximum Temprature field is required" });
            }
            if (!(Tmin)) {
                return res.status(400).json({ result: false, message: "Minimum Temprature field is required" });
            }

            let O2 = 1 / Math.sin((Tu - (Tmax + Tmin / 2)) / alpha)
            let part1 = (((Tmax + Tmin) / 2) - Tl) * (O2 + (3.14 / 2));
            let part2 = (Tu - Tl) * ((3.14 / 2) - O2)
            let part3 = ((alpha) * (Math.cos(O2)))
            console.log(part2, part3)
            let DegreeDay = (1 / 3.14) * (part1 + part2 - part3)
            return res.status(200).json({ result: true, degree_day: DegreeDay });

        } catch (error) {
            console.log(error)
            return res.status(500).json({ result: false, error: error });
        }
    }

}

module.exports = DegreeCalculator;