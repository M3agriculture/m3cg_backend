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
    static async getDegreeDaysBothThreshold(req, res) {
        try {

            let Tu = 88; let Tl = 50; let Tmax = Number(req.query.min_temp); let Tmin = Number(req.query.max_temp); let alpha = 1;
            if (!(Tmax)) {
                return res.status(400).json({ result: false, message: "Mximum Temprature field is required" });
            }
            if (!(Tmin)) {
                return res.status(400).json({ result: false, message: "Minimum Temprature field is required" });
            }

            let O1 = 1 / Math.sin((Tu - (Tmax + Tmin / 2)) / alpha)
            let O2 = 1 / Math.sin((Tu - (Tmax + Tmin / 2)) / alpha)
            let part1 = (((Tmax + Tmin) / 2) - Tl) * (O2 - O1);
            let part2 = alpha * (Math.cos(O1) - Math.cos(O2))
            let part3 = ((Tu - Tl) * ((3.14 / 2) - O2))
            console.log(part2, part3)
            let DegreeDay = (1 / 3.14) * (part1 + part2 + part3)
            return res.status(200).json({ result: true, degree_day: DegreeDay });

        } catch (error) {
            console.log(error)
            return res.status(500).json({ result: false, error: error });
        }
    }
    static async getDegreeDaysForEntirelyBothThreshold(req, res) {
        try {

            let Tu = 88; let Tl = 50; let Tmax = Number(req.query.min_temp); let Tmin = Number(req.query.max_temp); let alpha = 1;
            if (!(Tmax)) {
                return res.status(400).json({ result: false, message: "Mximum Temprature field is required" });
            }
            if (!(Tmin)) {
                return res.status(400).json({ result: false, message: "Minimum Temprature field is required" });
            }

            let DegreeDay = ((Tmax + Tmin) / 2) - Tl
            return res.status(200).json({ result: true, degree_day: DegreeDay });

        } catch (error) {
            console.log(error)
            return res.status(500).json({ result: false, error: error });
        }
    }
    static async getInterceptedLowerThreshold(req, res) {
        try {

            let Tu = 88; let Tl = 50; let Tmax = Number(req.query.min_temp); let Tmin = Number(req.query.max_temp); let alpha = 1;
            if (!(Tmax)) {
                return res.status(400).json({ result: false, message: "Mximum Temprature field is required" });
            }
            if (!(Tmin)) {
                return res.status(400).json({ result: false, message: "Minimum Temprature field is required" });
            }

            let O1 = 1 / Math.sin((Tl - (Tmax + Tmin / 2)) / alpha)
            let part1 = (((Tmax + Tmin) / 2) - Tl) * ((3.14 / 2) - O1);
            let part2 = ((alpha) * (Math.cos(O1)))
            let DegreeDay = (1 / 3.14) * (part1 + part2)

            return res.status(200).json({ result: true, degree_day: DegreeDay });

        } catch (error) {
            console.log(error)
            return res.status(500).json({ result: false, error: error });
        }
    }
    static async getDegreeDaysAboveBothThreshold(req, res) {
        try {

            let Tu = 88; let Tl = 50; let Tmax = Number(req.query.min_temp); let Tmin = Number(req.query.max_temp); let alpha = 1;
            if (!(Tmax)) {
                return res.status(400).json({ result: false, message: "Mximum Temprature field is required" });
            }
            if (!(Tmin)) {
                return res.status(400).json({ result: false, message: "Minimum Temprature field is required" });
            }

            let DegreeDay = Tu - Tl
            return res.status(200).json({ result: true, degree_day: DegreeDay });

        } catch (error) {
            console.log(error)
            return res.status(500).json({ result: false, error: error });
        }
    }
    static async getDegreeDaysBelowBothThreshold(req, res) {
        try {

            let Tu = 88; let Tl = 50; let Tmax = Number(req.query.min_temp); let Tmin = Number(req.query.max_temp); let alpha = 1;
            if (!(Tmax)) {
                return res.status(400).json({ result: false, message: "Mximum Temprature field is required" });
            }
            if (!(Tmin)) {
                return res.status(400).json({ result: false, message: "Minimum Temprature field is required" });
            }

            let DegreeDay = 0;
            return res.status(200).json({ result: true, degree_day: DegreeDay });

        } catch (error) {
            console.log(error)
            return res.status(500).json({ result: false, error: error });
        }
    }

}

module.exports = DegreeCalculator;