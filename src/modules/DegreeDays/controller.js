// const ObjectId = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const moment = require('moment')




class DegreeCalculator {


    static async getDegreeDays(req, res) {
        try {
            let sheet = [
                // {
                //     "Column1": null,
                //     "Tmin": 45,
                //     "Tmax": 90,
                //     "LowerThreshold": 0,
                //     "UpperThreshold": 0,
                //     "Column6": null,
                //     "Amplitude ": 22.5
                // },
                {
                    "Column1": "7\/1\/22 0:00",
                    "Tmin": 1,
                    "Tmax": 45.02141501,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": 18.03601277,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 0:10",
                    "Tmin": 2,
                    "Tmax": 45.08561929,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 0:20",
                    "Tmin": 3,
                    "Tmax": 45.19249062,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 0:30",
                    "Tmin": 4,
                    "Tmax": 45.34182556,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 0:40",
                    "Tmin": 5,
                    "Tmax": 45.53333984,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 0:50",
                    "Tmin": 6,
                    "Tmax": 45.76666891,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 1:00",
                    "Tmin": 7,
                    "Tmax": 46.04136861,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 1:10",
                    "Tmin": 8,
                    "Tmax": 46.35691603,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 1:20",
                    "Tmin": 9,
                    "Tmax": 46.71271052,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 1:30",
                    "Tmin": 10,
                    "Tmax": 47.10807479,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 1:40",
                    "Tmin": 11,
                    "Tmax": 47.54225625,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 1:50",
                    "Tmin": 12,
                    "Tmax": 48.01442841,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 2:00",
                    "Tmin": 13,
                    "Tmax": 48.52369247,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 2:10",
                    "Tmin": 14,
                    "Tmax": 49.069079,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 2:20",
                    "Tmin": 15,
                    "Tmax": 49.64954984,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 2:30",
                    "Tmin": 16,
                    "Tmax": 50.26400003,
                    "LowerThreshold": 0.2640000298,
                    "UpperThreshold": 0.04400000497,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 2:40",
                    "Tmin": 17,
                    "Tmax": 50.91125992,
                    "LowerThreshold": 0.9112599218,
                    "UpperThreshold": 0.1518766536,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 2:50",
                    "Tmin": 18,
                    "Tmax": 51.59009742,
                    "LowerThreshold": 1.590097423,
                    "UpperThreshold": 0.2650162372,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 3:00",
                    "Tmin": 19,
                    "Tmax": 52.29922033,
                    "LowerThreshold": 2.299220329,
                    "UpperThreshold": 0.3832033881,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 3:10",
                    "Tmin": 20,
                    "Tmax": 53.03727878,
                    "LowerThreshold": 3.037278782,
                    "UpperThreshold": 0.5062131303,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 3:20",
                    "Tmin": 21,
                    "Tmax": 53.80286785,
                    "LowerThreshold": 3.802867847,
                    "UpperThreshold": 0.6338113079,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 3:30",
                    "Tmin": 22,
                    "Tmax": 54.59453018,
                    "LowerThreshold": 4.594530182,
                    "UpperThreshold": 0.7657550304,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 3:40",
                    "Tmin": 23,
                    "Tmax": 55.41075881,
                    "LowerThreshold": 5.410758812,
                    "UpperThreshold": 0.9017931354,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 3:50",
                    "Tmin": 24,
                    "Tmax": 56.25,
                    "LowerThreshold": 6.25,
                    "UpperThreshold": 1.041666667,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 4:00",
                    "Tmin": 25,
                    "Tmax": 57.1106562,
                    "LowerThreshold": 7.110656202,
                    "UpperThreshold": 1.185109367,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 4:10",
                    "Tmin": 26,
                    "Tmax": 57.99108911,
                    "LowerThreshold": 7.991089111,
                    "UpperThreshold": 1.331848185,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 4:20",
                    "Tmin": 27,
                    "Tmax": 58.88962277,
                    "LowerThreshold": 8.889622772,
                    "UpperThreshold": 1.481603795,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 4:30",
                    "Tmin": 28,
                    "Tmax": 59.80454678,
                    "LowerThreshold": 9.804546775,
                    "UpperThreshold": 1.634091129,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 4:40",
                    "Tmin": 29,
                    "Tmax": 60.73411951,
                    "LowerThreshold": 10.73411951,
                    "UpperThreshold": 1.789019919,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 4:50",
                    "Tmin": 30,
                    "Tmax": 61.67657149,
                    "LowerThreshold": 11.67657149,
                    "UpperThreshold": 1.946095248,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 5:00",
                    "Tmin": 31,
                    "Tmax": 62.63010869,
                    "LowerThreshold": 12.63010869,
                    "UpperThreshold": 2.105018114,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 5:10",
                    "Tmin": 32,
                    "Tmax": 63.592916,
                    "LowerThreshold": 13.592916,
                    "UpperThreshold": 2.265486,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 5:20",
                    "Tmin": 33,
                    "Tmax": 64.56316068,
                    "LowerThreshold": 14.56316068,
                    "UpperThreshold": 2.427193446,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 5:30",
                    "Tmin": 34,
                    "Tmax": 65.53899579,
                    "LowerThreshold": 15.53899579,
                    "UpperThreshold": 2.589832631,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 5:40",
                    "Tmin": 35,
                    "Tmax": 66.51856378,
                    "LowerThreshold": 16.51856378,
                    "UpperThreshold": 2.753093964,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 5:50",
                    "Tmin": 36,
                    "Tmax": 67.5,
                    "LowerThreshold": 17.5,
                    "UpperThreshold": 2.916666667,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 6:00",
                    "Tmin": 37,
                    "Tmax": 68.48143622,
                    "LowerThreshold": 18.48143622,
                    "UpperThreshold": 3.080239369,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 6:10",
                    "Tmin": 38,
                    "Tmax": 69.46100421,
                    "LowerThreshold": 19.46100421,
                    "UpperThreshold": 3.243500702,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 6:20",
                    "Tmin": 39,
                    "Tmax": 70.43683932,
                    "LowerThreshold": 20.43683932,
                    "UpperThreshold": 3.406139887,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 6:30",
                    "Tmin": 40,
                    "Tmax": 71.407084,
                    "LowerThreshold": 21.407084,
                    "UpperThreshold": 3.567847333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 6:40",
                    "Tmin": 41,
                    "Tmax": 72.36989131,
                    "LowerThreshold": 22.36989131,
                    "UpperThreshold": 3.728315219,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 6:50",
                    "Tmin": 42,
                    "Tmax": 73.32342851,
                    "LowerThreshold": 23.32342851,
                    "UpperThreshold": 3.887238086,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 7:00",
                    "Tmin": 43,
                    "Tmax": 74.26588049,
                    "LowerThreshold": 24.26588049,
                    "UpperThreshold": 4.044313415,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 7:10",
                    "Tmin": 44,
                    "Tmax": 75.19545322,
                    "LowerThreshold": 25.19545322,
                    "UpperThreshold": 4.199242204,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 7:20",
                    "Tmin": 45,
                    "Tmax": 76.11037723,
                    "LowerThreshold": 26.11037723,
                    "UpperThreshold": 4.351729538,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 7:30",
                    "Tmin": 46,
                    "Tmax": 77.00891089,
                    "LowerThreshold": 27.00891089,
                    "UpperThreshold": 4.501485148,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 7:40",
                    "Tmin": 47,
                    "Tmax": 77.8893438,
                    "LowerThreshold": 27.8893438,
                    "UpperThreshold": 4.648223966,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 7:50",
                    "Tmin": 48,
                    "Tmax": 78.75,
                    "LowerThreshold": 28.75,
                    "UpperThreshold": 4.791666667,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 8:00",
                    "Tmin": 49,
                    "Tmax": 79.58924119,
                    "LowerThreshold": 29.58924119,
                    "UpperThreshold": 4.931540198,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 8:10",
                    "Tmin": 50,
                    "Tmax": 80.40546982,
                    "LowerThreshold": 30.40546982,
                    "UpperThreshold": 5.067578303,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 8:20",
                    "Tmin": 51,
                    "Tmax": 81.19713215,
                    "LowerThreshold": 31.19713215,
                    "UpperThreshold": 5.199522025,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 8:30",
                    "Tmin": 52,
                    "Tmax": 81.96272122,
                    "LowerThreshold": 31.96272122,
                    "UpperThreshold": 5.327120203,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 8:40",
                    "Tmin": 53,
                    "Tmax": 82.70077967,
                    "LowerThreshold": 32.70077967,
                    "UpperThreshold": 5.450129945,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 8:50",
                    "Tmin": 54,
                    "Tmax": 83.40990258,
                    "LowerThreshold": 33.40990258,
                    "UpperThreshold": 5.568317096,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 9:00",
                    "Tmin": 55,
                    "Tmax": 84.08874008,
                    "LowerThreshold": 34.08874008,
                    "UpperThreshold": 5.68145668,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 9:10",
                    "Tmin": 56,
                    "Tmax": 84.73599997,
                    "LowerThreshold": 34.73599997,
                    "UpperThreshold": 5.789333328,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 9:20",
                    "Tmin": 57,
                    "Tmax": 85.35045016,
                    "LowerThreshold": 35.35045016,
                    "UpperThreshold": 5.891741693,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 9:30",
                    "Tmin": 58,
                    "Tmax": 85.930921,
                    "LowerThreshold": 35.930921,
                    "UpperThreshold": 5.988486833,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 9:40",
                    "Tmin": 59,
                    "Tmax": 86.47630753,
                    "LowerThreshold": 36.47630753,
                    "UpperThreshold": 6.079384588,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 9:50",
                    "Tmin": 60,
                    "Tmax": 86.98557159,
                    "LowerThreshold": 36.98557159,
                    "UpperThreshold": 6.164261931,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 10:00",
                    "Tmin": 61,
                    "Tmax": 87.45774375,
                    "LowerThreshold": 37.45774375,
                    "UpperThreshold": 6.242957291,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 10:10",
                    "Tmin": 62,
                    "Tmax": 87.89192521,
                    "LowerThreshold": 37.89192521,
                    "UpperThreshold": 6.315320868,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 10:20",
                    "Tmin": 63,
                    "Tmax": 88.28728948,
                    "LowerThreshold": 38.28728948,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 10:30",
                    "Tmin": 64,
                    "Tmax": 88.64308397,
                    "LowerThreshold": 38.64308397,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 10:40",
                    "Tmin": 65,
                    "Tmax": 88.95863139,
                    "LowerThreshold": 38.95863139,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 10:50",
                    "Tmin": 66,
                    "Tmax": 89.23333109,
                    "LowerThreshold": 39.23333109,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 11:00",
                    "Tmin": 67,
                    "Tmax": 89.46666016,
                    "LowerThreshold": 39.46666016,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 11:10",
                    "Tmin": 68,
                    "Tmax": 89.65817444,
                    "LowerThreshold": 39.65817444,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 11:20",
                    "Tmin": 69,
                    "Tmax": 89.80750938,
                    "LowerThreshold": 39.80750938,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 11:30",
                    "Tmin": 70,
                    "Tmax": 89.91438071,
                    "LowerThreshold": 39.91438071,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 11:40",
                    "Tmin": 71,
                    "Tmax": 89.97858499,
                    "LowerThreshold": 39.97858499,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 11:50",
                    "Tmin": 72,
                    "Tmax": 90,
                    "LowerThreshold": 40,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 12:00",
                    "Tmin": 73,
                    "Tmax": 89.97858499,
                    "LowerThreshold": 39.97858499,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 12:10",
                    "Tmin": 74,
                    "Tmax": 89.91438071,
                    "LowerThreshold": 39.91438071,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 12:20",
                    "Tmin": 75,
                    "Tmax": 89.80750938,
                    "LowerThreshold": 39.80750938,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 12:30",
                    "Tmin": 76,
                    "Tmax": 89.65817444,
                    "LowerThreshold": 39.65817444,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 12:40",
                    "Tmin": 77,
                    "Tmax": 89.46666016,
                    "LowerThreshold": 39.46666016,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 12:50",
                    "Tmin": 78,
                    "Tmax": 89.23333109,
                    "LowerThreshold": 39.23333109,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 13:00",
                    "Tmin": 79,
                    "Tmax": 88.95863139,
                    "LowerThreshold": 38.95863139,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 13:10",
                    "Tmin": 80,
                    "Tmax": 88.64308397,
                    "LowerThreshold": 38.64308397,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 13:20",
                    "Tmin": 81,
                    "Tmax": 88.28728948,
                    "LowerThreshold": 38.28728948,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 13:30",
                    "Tmin": 82,
                    "Tmax": 87.89192521,
                    "LowerThreshold": 37.89192521,
                    "UpperThreshold": 6.315320868,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 13:40",
                    "Tmin": 83,
                    "Tmax": 87.45774375,
                    "LowerThreshold": 37.45774375,
                    "UpperThreshold": 6.242957291,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 13:50",
                    "Tmin": 84,
                    "Tmax": 86.98557159,
                    "LowerThreshold": 36.98557159,
                    "UpperThreshold": 6.164261931,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 14:00",
                    "Tmin": 85,
                    "Tmax": 86.47630753,
                    "LowerThreshold": 36.47630753,
                    "UpperThreshold": 6.079384588,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 14:10",
                    "Tmin": 86,
                    "Tmax": 85.930921,
                    "LowerThreshold": 35.930921,
                    "UpperThreshold": 5.988486833,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 14:20",
                    "Tmin": 87,
                    "Tmax": 85.35045016,
                    "LowerThreshold": 35.35045016,
                    "UpperThreshold": 5.891741693,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 14:30",
                    "Tmin": 88,
                    "Tmax": 84.73599997,
                    "LowerThreshold": 34.73599997,
                    "UpperThreshold": 5.789333328,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 14:40",
                    "Tmin": 89,
                    "Tmax": 84.08874008,
                    "LowerThreshold": 34.08874008,
                    "UpperThreshold": 5.68145668,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 14:50",
                    "Tmin": 90,
                    "Tmax": 83.40990258,
                    "LowerThreshold": 33.40990258,
                    "UpperThreshold": 5.568317096,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 15:00",
                    "Tmin": 91,
                    "Tmax": 82.70077967,
                    "LowerThreshold": 32.70077967,
                    "UpperThreshold": 5.450129945,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 15:10",
                    "Tmin": 92,
                    "Tmax": 81.96272122,
                    "LowerThreshold": 31.96272122,
                    "UpperThreshold": 5.327120203,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 15:20",
                    "Tmin": 93,
                    "Tmax": 81.19713215,
                    "LowerThreshold": 31.19713215,
                    "UpperThreshold": 5.199522025,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 15:30",
                    "Tmin": 94,
                    "Tmax": 80.40546982,
                    "LowerThreshold": 30.40546982,
                    "UpperThreshold": 5.067578303,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 15:40",
                    "Tmin": 95,
                    "Tmax": 79.58924119,
                    "LowerThreshold": 29.58924119,
                    "UpperThreshold": 4.931540198,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 15:50",
                    "Tmin": 96,
                    "Tmax": 78.75,
                    "LowerThreshold": 28.75,
                    "UpperThreshold": 4.791666667,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 16:00",
                    "Tmin": 97,
                    "Tmax": 77.8893438,
                    "LowerThreshold": 27.8893438,
                    "UpperThreshold": 4.648223966,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 16:10",
                    "Tmin": 98,
                    "Tmax": 77.00891089,
                    "LowerThreshold": 27.00891089,
                    "UpperThreshold": 4.501485148,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 16:20",
                    "Tmin": 99,
                    "Tmax": 76.11037723,
                    "LowerThreshold": 26.11037723,
                    "UpperThreshold": 4.351729538,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 16:30",
                    "Tmin": 100,
                    "Tmax": 75.19545322,
                    "LowerThreshold": 25.19545322,
                    "UpperThreshold": 4.199242204,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 16:40",
                    "Tmin": 101,
                    "Tmax": 74.26588049,
                    "LowerThreshold": 24.26588049,
                    "UpperThreshold": 4.044313415,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 16:50",
                    "Tmin": 102,
                    "Tmax": 73.32342851,
                    "LowerThreshold": 23.32342851,
                    "UpperThreshold": 3.887238086,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 17:00",
                    "Tmin": 103,
                    "Tmax": 72.36989131,
                    "LowerThreshold": 22.36989131,
                    "UpperThreshold": 3.728315219,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 17:10",
                    "Tmin": 104,
                    "Tmax": 71.407084,
                    "LowerThreshold": 21.407084,
                    "UpperThreshold": 3.567847333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 17:20",
                    "Tmin": 105,
                    "Tmax": 70.43683932,
                    "LowerThreshold": 20.43683932,
                    "UpperThreshold": 3.406139887,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 17:30",
                    "Tmin": 106,
                    "Tmax": 69.46100421,
                    "LowerThreshold": 19.46100421,
                    "UpperThreshold": 3.243500702,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 17:40",
                    "Tmin": 107,
                    "Tmax": 68.48143622,
                    "LowerThreshold": 18.48143622,
                    "UpperThreshold": 3.080239369,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 17:50",
                    "Tmin": 108,
                    "Tmax": 67.5,
                    "LowerThreshold": 17.5,
                    "UpperThreshold": 2.916666667,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 18:00",
                    "Tmin": 109,
                    "Tmax": 66.51856378,
                    "LowerThreshold": 16.51856378,
                    "UpperThreshold": 2.753093964,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 18:10",
                    "Tmin": 110,
                    "Tmax": 65.53899579,
                    "LowerThreshold": 15.53899579,
                    "UpperThreshold": 2.589832631,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 18:20",
                    "Tmin": 111,
                    "Tmax": 64.56316068,
                    "LowerThreshold": 14.56316068,
                    "UpperThreshold": 2.427193446,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 18:30",
                    "Tmin": 112,
                    "Tmax": 63.592916,
                    "LowerThreshold": 13.592916,
                    "UpperThreshold": 2.265486,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 18:40",
                    "Tmin": 113,
                    "Tmax": 62.63010869,
                    "LowerThreshold": 12.63010869,
                    "UpperThreshold": 2.105018114,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 18:50",
                    "Tmin": 114,
                    "Tmax": 61.67657149,
                    "LowerThreshold": 11.67657149,
                    "UpperThreshold": 1.946095248,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 19:00",
                    "Tmin": 115,
                    "Tmax": 60.73411951,
                    "LowerThreshold": 10.73411951,
                    "UpperThreshold": 1.789019919,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 19:10",
                    "Tmin": 116,
                    "Tmax": 59.80454678,
                    "LowerThreshold": 9.804546775,
                    "UpperThreshold": 1.634091129,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 19:20",
                    "Tmin": 117,
                    "Tmax": 58.88962277,
                    "LowerThreshold": 8.889622772,
                    "UpperThreshold": 1.481603795,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 19:30",
                    "Tmin": 118,
                    "Tmax": 57.99108911,
                    "LowerThreshold": 7.991089111,
                    "UpperThreshold": 1.331848185,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 19:40",
                    "Tmin": 119,
                    "Tmax": 57.1106562,
                    "LowerThreshold": 7.110656202,
                    "UpperThreshold": 1.185109367,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 19:50",
                    "Tmin": 120,
                    "Tmax": 56.25,
                    "LowerThreshold": 6.25,
                    "UpperThreshold": 1.041666667,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 20:00",
                    "Tmin": 121,
                    "Tmax": 55.41075881,
                    "LowerThreshold": 5.410758812,
                    "UpperThreshold": 0.9017931354,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 20:10",
                    "Tmin": 122,
                    "Tmax": 54.59453018,
                    "LowerThreshold": 4.594530182,
                    "UpperThreshold": 0.7657550304,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 20:20",
                    "Tmin": 123,
                    "Tmax": 53.80286785,
                    "LowerThreshold": 3.802867847,
                    "UpperThreshold": 0.6338113079,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 20:30",
                    "Tmin": 124,
                    "Tmax": 53.03727878,
                    "LowerThreshold": 3.037278782,
                    "UpperThreshold": 0.5062131303,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 20:40",
                    "Tmin": 125,
                    "Tmax": 52.29922033,
                    "LowerThreshold": 2.299220329,
                    "UpperThreshold": 0.3832033881,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 20:50",
                    "Tmin": 126,
                    "Tmax": 51.59009742,
                    "LowerThreshold": 1.590097423,
                    "UpperThreshold": 0.2650162372,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 21:00",
                    "Tmin": 127,
                    "Tmax": 50.91125992,
                    "LowerThreshold": 0.9112599218,
                    "UpperThreshold": 0.1518766536,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 21:10",
                    "Tmin": 128,
                    "Tmax": 50.26400003,
                    "LowerThreshold": 0.2640000298,
                    "UpperThreshold": 0.04400000497,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 21:20",
                    "Tmin": 129,
                    "Tmax": 49.64954984,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 21:30",
                    "Tmin": 130,
                    "Tmax": 49.069079,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 21:40",
                    "Tmin": 131,
                    "Tmax": 48.52369247,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 21:50",
                    "Tmin": 132,
                    "Tmax": 48.01442841,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 22:00",
                    "Tmin": 133,
                    "Tmax": 47.54225625,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 22:10",
                    "Tmin": 134,
                    "Tmax": 47.10807479,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 22:20",
                    "Tmin": 135,
                    "Tmax": 46.71271052,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 22:30",
                    "Tmin": 136,
                    "Tmax": 46.35691603,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 22:40",
                    "Tmin": 137,
                    "Tmax": 46.04136861,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 22:50",
                    "Tmin": 138,
                    "Tmax": 45.76666891,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 23:00",
                    "Tmin": 139,
                    "Tmax": 45.53333984,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 23:10",
                    "Tmin": 140,
                    "Tmax": 45.34182556,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 23:20",
                    "Tmin": 141,
                    "Tmax": 45.19249062,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 23:30",
                    "Tmin": 142,
                    "Tmax": 45.08561929,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 23:40",
                    "Tmin": 143,
                    "Tmax": 45.02141501,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 23:50",
                    "Tmin": 144,
                    "Tmax": 45,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                }
            ]

 

            let DegreeDaysData = []
            let tempratues=[]
            
            var accomulator = 0
            sheet.map(i => {
                let step1 = (i.Tmax - 50) < 0 ? 0 : i.Tmax - 50;
                let adjusted = (1 / 6) * (i.Tmax - 88 > 0, step1 - (i.Tmax - 88), step1);
                accomulator += adjusted
                tempratues.push(i.Tmax)
            })

            let DegreeDay = accomulator / 24
            // if (DegreeDay)
            // DegreeDaysData.push(DegreeDay)
            // })
            return res.status(200).json({ result: true, degree_day: DegreeDay,tempratues });

        } catch (error) {
            console.log(error)
            return res.status(500).json({ result: false, error: error });
        }
    }
    static async getDegreeDays_1(req, res) {
        try {
            let sheet = [
                // {
                //     "Column1": null,
                //     "Tmin": 45,
                //     "Tmax": 90,
                //     "LowerThreshold": 0,
                //     "UpperThreshold": 0,
                //     "Column6": null,
                //     "Amplitude ": 22.5
                // },
                {
                    "Column1": "7\/1\/22 0:00",
                    "Tmin": 1,
                    "Tmax": 45.02141501,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": 18.03601277,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 0:10",
                    "Tmin": 2,
                    "Tmax": 45.08561929,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 0:20",
                    "Tmin": 3,
                    "Tmax": 45.19249062,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 0:30",
                    "Tmin": 4,
                    "Tmax": 45.34182556,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 0:40",
                    "Tmin": 5,
                    "Tmax": 45.53333984,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 0:50",
                    "Tmin": 6,
                    "Tmax": 45.76666891,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 1:00",
                    "Tmin": 7,
                    "Tmax": 46.04136861,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 1:10",
                    "Tmin": 8,
                    "Tmax": 46.35691603,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 1:20",
                    "Tmin": 9,
                    "Tmax": 46.71271052,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 1:30",
                    "Tmin": 10,
                    "Tmax": 47.10807479,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 1:40",
                    "Tmin": 11,
                    "Tmax": 47.54225625,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 1:50",
                    "Tmin": 12,
                    "Tmax": 48.01442841,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 2:00",
                    "Tmin": 13,
                    "Tmax": 48.52369247,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 2:10",
                    "Tmin": 14,
                    "Tmax": 49.069079,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 2:20",
                    "Tmin": 15,
                    "Tmax": 49.64954984,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 2:30",
                    "Tmin": 16,
                    "Tmax": 50.26400003,
                    "LowerThreshold": 0.2640000298,
                    "UpperThreshold": 0.04400000497,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 2:40",
                    "Tmin": 17,
                    "Tmax": 50.91125992,
                    "LowerThreshold": 0.9112599218,
                    "UpperThreshold": 0.1518766536,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 2:50",
                    "Tmin": 18,
                    "Tmax": 51.59009742,
                    "LowerThreshold": 1.590097423,
                    "UpperThreshold": 0.2650162372,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 3:00",
                    "Tmin": 19,
                    "Tmax": 52.29922033,
                    "LowerThreshold": 2.299220329,
                    "UpperThreshold": 0.3832033881,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 3:10",
                    "Tmin": 20,
                    "Tmax": 53.03727878,
                    "LowerThreshold": 3.037278782,
                    "UpperThreshold": 0.5062131303,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 3:20",
                    "Tmin": 21,
                    "Tmax": 53.80286785,
                    "LowerThreshold": 3.802867847,
                    "UpperThreshold": 0.6338113079,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 3:30",
                    "Tmin": 22,
                    "Tmax": 54.59453018,
                    "LowerThreshold": 4.594530182,
                    "UpperThreshold": 0.7657550304,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 3:40",
                    "Tmin": 23,
                    "Tmax": 55.41075881,
                    "LowerThreshold": 5.410758812,
                    "UpperThreshold": 0.9017931354,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 3:50",
                    "Tmin": 24,
                    "Tmax": 56.25,
                    "LowerThreshold": 6.25,
                    "UpperThreshold": 1.041666667,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 4:00",
                    "Tmin": 25,
                    "Tmax": 57.1106562,
                    "LowerThreshold": 7.110656202,
                    "UpperThreshold": 1.185109367,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 4:10",
                    "Tmin": 26,
                    "Tmax": 57.99108911,
                    "LowerThreshold": 7.991089111,
                    "UpperThreshold": 1.331848185,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 4:20",
                    "Tmin": 27,
                    "Tmax": 58.88962277,
                    "LowerThreshold": 8.889622772,
                    "UpperThreshold": 1.481603795,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 4:30",
                    "Tmin": 28,
                    "Tmax": 59.80454678,
                    "LowerThreshold": 9.804546775,
                    "UpperThreshold": 1.634091129,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 4:40",
                    "Tmin": 29,
                    "Tmax": 60.73411951,
                    "LowerThreshold": 10.73411951,
                    "UpperThreshold": 1.789019919,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 4:50",
                    "Tmin": 30,
                    "Tmax": 61.67657149,
                    "LowerThreshold": 11.67657149,
                    "UpperThreshold": 1.946095248,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 5:00",
                    "Tmin": 31,
                    "Tmax": 62.63010869,
                    "LowerThreshold": 12.63010869,
                    "UpperThreshold": 2.105018114,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 5:10",
                    "Tmin": 32,
                    "Tmax": 63.592916,
                    "LowerThreshold": 13.592916,
                    "UpperThreshold": 2.265486,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 5:20",
                    "Tmin": 33,
                    "Tmax": 64.56316068,
                    "LowerThreshold": 14.56316068,
                    "UpperThreshold": 2.427193446,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 5:30",
                    "Tmin": 34,
                    "Tmax": 65.53899579,
                    "LowerThreshold": 15.53899579,
                    "UpperThreshold": 2.589832631,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 5:40",
                    "Tmin": 35,
                    "Tmax": 66.51856378,
                    "LowerThreshold": 16.51856378,
                    "UpperThreshold": 2.753093964,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 5:50",
                    "Tmin": 36,
                    "Tmax": 67.5,
                    "LowerThreshold": 17.5,
                    "UpperThreshold": 2.916666667,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 6:00",
                    "Tmin": 37,
                    "Tmax": 68.48143622,
                    "LowerThreshold": 18.48143622,
                    "UpperThreshold": 3.080239369,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 6:10",
                    "Tmin": 38,
                    "Tmax": 69.46100421,
                    "LowerThreshold": 19.46100421,
                    "UpperThreshold": 3.243500702,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 6:20",
                    "Tmin": 39,
                    "Tmax": 70.43683932,
                    "LowerThreshold": 20.43683932,
                    "UpperThreshold": 3.406139887,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 6:30",
                    "Tmin": 40,
                    "Tmax": 71.407084,
                    "LowerThreshold": 21.407084,
                    "UpperThreshold": 3.567847333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 6:40",
                    "Tmin": 41,
                    "Tmax": 72.36989131,
                    "LowerThreshold": 22.36989131,
                    "UpperThreshold": 3.728315219,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 6:50",
                    "Tmin": 42,
                    "Tmax": 73.32342851,
                    "LowerThreshold": 23.32342851,
                    "UpperThreshold": 3.887238086,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 7:00",
                    "Tmin": 43,
                    "Tmax": 74.26588049,
                    "LowerThreshold": 24.26588049,
                    "UpperThreshold": 4.044313415,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 7:10",
                    "Tmin": 44,
                    "Tmax": 75.19545322,
                    "LowerThreshold": 25.19545322,
                    "UpperThreshold": 4.199242204,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 7:20",
                    "Tmin": 45,
                    "Tmax": 76.11037723,
                    "LowerThreshold": 26.11037723,
                    "UpperThreshold": 4.351729538,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 7:30",
                    "Tmin": 46,
                    "Tmax": 77.00891089,
                    "LowerThreshold": 27.00891089,
                    "UpperThreshold": 4.501485148,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 7:40",
                    "Tmin": 47,
                    "Tmax": 77.8893438,
                    "LowerThreshold": 27.8893438,
                    "UpperThreshold": 4.648223966,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 7:50",
                    "Tmin": 48,
                    "Tmax": 78.75,
                    "LowerThreshold": 28.75,
                    "UpperThreshold": 4.791666667,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 8:00",
                    "Tmin": 49,
                    "Tmax": 79.58924119,
                    "LowerThreshold": 29.58924119,
                    "UpperThreshold": 4.931540198,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 8:10",
                    "Tmin": 50,
                    "Tmax": 80.40546982,
                    "LowerThreshold": 30.40546982,
                    "UpperThreshold": 5.067578303,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 8:20",
                    "Tmin": 51,
                    "Tmax": 81.19713215,
                    "LowerThreshold": 31.19713215,
                    "UpperThreshold": 5.199522025,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 8:30",
                    "Tmin": 52,
                    "Tmax": 81.96272122,
                    "LowerThreshold": 31.96272122,
                    "UpperThreshold": 5.327120203,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 8:40",
                    "Tmin": 53,
                    "Tmax": 82.70077967,
                    "LowerThreshold": 32.70077967,
                    "UpperThreshold": 5.450129945,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 8:50",
                    "Tmin": 54,
                    "Tmax": 83.40990258,
                    "LowerThreshold": 33.40990258,
                    "UpperThreshold": 5.568317096,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 9:00",
                    "Tmin": 55,
                    "Tmax": 84.08874008,
                    "LowerThreshold": 34.08874008,
                    "UpperThreshold": 5.68145668,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 9:10",
                    "Tmin": 56,
                    "Tmax": 84.73599997,
                    "LowerThreshold": 34.73599997,
                    "UpperThreshold": 5.789333328,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 9:20",
                    "Tmin": 57,
                    "Tmax": 85.35045016,
                    "LowerThreshold": 35.35045016,
                    "UpperThreshold": 5.891741693,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 9:30",
                    "Tmin": 58,
                    "Tmax": 85.930921,
                    "LowerThreshold": 35.930921,
                    "UpperThreshold": 5.988486833,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 9:40",
                    "Tmin": 59,
                    "Tmax": 86.47630753,
                    "LowerThreshold": 36.47630753,
                    "UpperThreshold": 6.079384588,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 9:50",
                    "Tmin": 60,
                    "Tmax": 86.98557159,
                    "LowerThreshold": 36.98557159,
                    "UpperThreshold": 6.164261931,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 10:00",
                    "Tmin": 61,
                    "Tmax": 87.45774375,
                    "LowerThreshold": 37.45774375,
                    "UpperThreshold": 6.242957291,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 10:10",
                    "Tmin": 62,
                    "Tmax": 87.89192521,
                    "LowerThreshold": 37.89192521,
                    "UpperThreshold": 6.315320868,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 10:20",
                    "Tmin": 63,
                    "Tmax": 88.28728948,
                    "LowerThreshold": 38.28728948,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 10:30",
                    "Tmin": 64,
                    "Tmax": 88.64308397,
                    "LowerThreshold": 38.64308397,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 10:40",
                    "Tmin": 65,
                    "Tmax": 88.95863139,
                    "LowerThreshold": 38.95863139,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 10:50",
                    "Tmin": 66,
                    "Tmax": 89.23333109,
                    "LowerThreshold": 39.23333109,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 11:00",
                    "Tmin": 67,
                    "Tmax": 89.46666016,
                    "LowerThreshold": 39.46666016,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 11:10",
                    "Tmin": 68,
                    "Tmax": 89.65817444,
                    "LowerThreshold": 39.65817444,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 11:20",
                    "Tmin": 69,
                    "Tmax": 89.80750938,
                    "LowerThreshold": 39.80750938,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 11:30",
                    "Tmin": 70,
                    "Tmax": 89.91438071,
                    "LowerThreshold": 39.91438071,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 11:40",
                    "Tmin": 71,
                    "Tmax": 89.97858499,
                    "LowerThreshold": 39.97858499,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 11:50",
                    "Tmin": 72,
                    "Tmax": 90,
                    "LowerThreshold": 40,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 12:00",
                    "Tmin": 73,
                    "Tmax": 89.97858499,
                    "LowerThreshold": 39.97858499,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 12:10",
                    "Tmin": 74,
                    "Tmax": 89.91438071,
                    "LowerThreshold": 39.91438071,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 12:20",
                    "Tmin": 75,
                    "Tmax": 89.80750938,
                    "LowerThreshold": 39.80750938,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 12:30",
                    "Tmin": 76,
                    "Tmax": 89.65817444,
                    "LowerThreshold": 39.65817444,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 12:40",
                    "Tmin": 77,
                    "Tmax": 89.46666016,
                    "LowerThreshold": 39.46666016,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 12:50",
                    "Tmin": 78,
                    "Tmax": 89.23333109,
                    "LowerThreshold": 39.23333109,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 13:00",
                    "Tmin": 79,
                    "Tmax": 88.95863139,
                    "LowerThreshold": 38.95863139,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 13:10",
                    "Tmin": 80,
                    "Tmax": 88.64308397,
                    "LowerThreshold": 38.64308397,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 13:20",
                    "Tmin": 81,
                    "Tmax": 88.28728948,
                    "LowerThreshold": 38.28728948,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 13:30",
                    "Tmin": 82,
                    "Tmax": 87.89192521,
                    "LowerThreshold": 37.89192521,
                    "UpperThreshold": 6.315320868,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 13:40",
                    "Tmin": 83,
                    "Tmax": 87.45774375,
                    "LowerThreshold": 37.45774375,
                    "UpperThreshold": 6.242957291,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 13:50",
                    "Tmin": 84,
                    "Tmax": 86.98557159,
                    "LowerThreshold": 36.98557159,
                    "UpperThreshold": 6.164261931,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 14:00",
                    "Tmin": 85,
                    "Tmax": 86.47630753,
                    "LowerThreshold": 36.47630753,
                    "UpperThreshold": 6.079384588,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 14:10",
                    "Tmin": 86,
                    "Tmax": 85.930921,
                    "LowerThreshold": 35.930921,
                    "UpperThreshold": 5.988486833,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 14:20",
                    "Tmin": 87,
                    "Tmax": 85.35045016,
                    "LowerThreshold": 35.35045016,
                    "UpperThreshold": 5.891741693,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 14:30",
                    "Tmin": 88,
                    "Tmax": 84.73599997,
                    "LowerThreshold": 34.73599997,
                    "UpperThreshold": 5.789333328,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 14:40",
                    "Tmin": 89,
                    "Tmax": 84.08874008,
                    "LowerThreshold": 34.08874008,
                    "UpperThreshold": 5.68145668,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 14:50",
                    "Tmin": 90,
                    "Tmax": 83.40990258,
                    "LowerThreshold": 33.40990258,
                    "UpperThreshold": 5.568317096,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 15:00",
                    "Tmin": 91,
                    "Tmax": 82.70077967,
                    "LowerThreshold": 32.70077967,
                    "UpperThreshold": 5.450129945,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 15:10",
                    "Tmin": 92,
                    "Tmax": 81.96272122,
                    "LowerThreshold": 31.96272122,
                    "UpperThreshold": 5.327120203,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 15:20",
                    "Tmin": 93,
                    "Tmax": 81.19713215,
                    "LowerThreshold": 31.19713215,
                    "UpperThreshold": 5.199522025,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 15:30",
                    "Tmin": 94,
                    "Tmax": 80.40546982,
                    "LowerThreshold": 30.40546982,
                    "UpperThreshold": 5.067578303,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 15:40",
                    "Tmin": 95,
                    "Tmax": 79.58924119,
                    "LowerThreshold": 29.58924119,
                    "UpperThreshold": 4.931540198,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 15:50",
                    "Tmin": 96,
                    "Tmax": 78.75,
                    "LowerThreshold": 28.75,
                    "UpperThreshold": 4.791666667,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 16:00",
                    "Tmin": 97,
                    "Tmax": 77.8893438,
                    "LowerThreshold": 27.8893438,
                    "UpperThreshold": 4.648223966,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 16:10",
                    "Tmin": 98,
                    "Tmax": 77.00891089,
                    "LowerThreshold": 27.00891089,
                    "UpperThreshold": 4.501485148,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 16:20",
                    "Tmin": 99,
                    "Tmax": 76.11037723,
                    "LowerThreshold": 26.11037723,
                    "UpperThreshold": 4.351729538,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 16:30",
                    "Tmin": 100,
                    "Tmax": 75.19545322,
                    "LowerThreshold": 25.19545322,
                    "UpperThreshold": 4.199242204,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 16:40",
                    "Tmin": 101,
                    "Tmax": 74.26588049,
                    "LowerThreshold": 24.26588049,
                    "UpperThreshold": 4.044313415,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 16:50",
                    "Tmin": 102,
                    "Tmax": 73.32342851,
                    "LowerThreshold": 23.32342851,
                    "UpperThreshold": 3.887238086,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 17:00",
                    "Tmin": 103,
                    "Tmax": 72.36989131,
                    "LowerThreshold": 22.36989131,
                    "UpperThreshold": 3.728315219,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 17:10",
                    "Tmin": 104,
                    "Tmax": 71.407084,
                    "LowerThreshold": 21.407084,
                    "UpperThreshold": 3.567847333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 17:20",
                    "Tmin": 105,
                    "Tmax": 70.43683932,
                    "LowerThreshold": 20.43683932,
                    "UpperThreshold": 3.406139887,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 17:30",
                    "Tmin": 106,
                    "Tmax": 69.46100421,
                    "LowerThreshold": 19.46100421,
                    "UpperThreshold": 3.243500702,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 17:40",
                    "Tmin": 107,
                    "Tmax": 68.48143622,
                    "LowerThreshold": 18.48143622,
                    "UpperThreshold": 3.080239369,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 17:50",
                    "Tmin": 108,
                    "Tmax": 67.5,
                    "LowerThreshold": 17.5,
                    "UpperThreshold": 2.916666667,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 18:00",
                    "Tmin": 109,
                    "Tmax": 66.51856378,
                    "LowerThreshold": 16.51856378,
                    "UpperThreshold": 2.753093964,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 18:10",
                    "Tmin": 110,
                    "Tmax": 65.53899579,
                    "LowerThreshold": 15.53899579,
                    "UpperThreshold": 2.589832631,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 18:20",
                    "Tmin": 111,
                    "Tmax": 64.56316068,
                    "LowerThreshold": 14.56316068,
                    "UpperThreshold": 2.427193446,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 18:30",
                    "Tmin": 112,
                    "Tmax": 63.592916,
                    "LowerThreshold": 13.592916,
                    "UpperThreshold": 2.265486,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 18:40",
                    "Tmin": 113,
                    "Tmax": 62.63010869,
                    "LowerThreshold": 12.63010869,
                    "UpperThreshold": 2.105018114,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 18:50",
                    "Tmin": 114,
                    "Tmax": 61.67657149,
                    "LowerThreshold": 11.67657149,
                    "UpperThreshold": 1.946095248,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 19:00",
                    "Tmin": 115,
                    "Tmax": 60.73411951,
                    "LowerThreshold": 10.73411951,
                    "UpperThreshold": 1.789019919,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 19:10",
                    "Tmin": 116,
                    "Tmax": 59.80454678,
                    "LowerThreshold": 9.804546775,
                    "UpperThreshold": 1.634091129,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 19:20",
                    "Tmin": 117,
                    "Tmax": 58.88962277,
                    "LowerThreshold": 8.889622772,
                    "UpperThreshold": 1.481603795,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 19:30",
                    "Tmin": 118,
                    "Tmax": 57.99108911,
                    "LowerThreshold": 7.991089111,
                    "UpperThreshold": 1.331848185,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 19:40",
                    "Tmin": 119,
                    "Tmax": 57.1106562,
                    "LowerThreshold": 7.110656202,
                    "UpperThreshold": 1.185109367,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 19:50",
                    "Tmin": 120,
                    "Tmax": 56.25,
                    "LowerThreshold": 6.25,
                    "UpperThreshold": 1.041666667,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 20:00",
                    "Tmin": 121,
                    "Tmax": 55.41075881,
                    "LowerThreshold": 5.410758812,
                    "UpperThreshold": 0.9017931354,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 20:10",
                    "Tmin": 122,
                    "Tmax": 54.59453018,
                    "LowerThreshold": 4.594530182,
                    "UpperThreshold": 0.7657550304,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 20:20",
                    "Tmin": 123,
                    "Tmax": 53.80286785,
                    "LowerThreshold": 3.802867847,
                    "UpperThreshold": 0.6338113079,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 20:30",
                    "Tmin": 124,
                    "Tmax": 53.03727878,
                    "LowerThreshold": 3.037278782,
                    "UpperThreshold": 0.5062131303,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 20:40",
                    "Tmin": 125,
                    "Tmax": 52.29922033,
                    "LowerThreshold": 2.299220329,
                    "UpperThreshold": 0.3832033881,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 20:50",
                    "Tmin": 126,
                    "Tmax": 51.59009742,
                    "LowerThreshold": 1.590097423,
                    "UpperThreshold": 0.2650162372,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 21:00",
                    "Tmin": 127,
                    "Tmax": 50.91125992,
                    "LowerThreshold": 0.9112599218,
                    "UpperThreshold": 0.1518766536,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 21:10",
                    "Tmin": 128,
                    "Tmax": 50.26400003,
                    "LowerThreshold": 0.2640000298,
                    "UpperThreshold": 0.04400000497,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 21:20",
                    "Tmin": 129,
                    "Tmax": 49.64954984,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 21:30",
                    "Tmin": 130,
                    "Tmax": 49.069079,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 21:40",
                    "Tmin": 131,
                    "Tmax": 48.52369247,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 21:50",
                    "Tmin": 132,
                    "Tmax": 48.01442841,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 22:00",
                    "Tmin": 133,
                    "Tmax": 47.54225625,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 22:10",
                    "Tmin": 134,
                    "Tmax": 47.10807479,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 22:20",
                    "Tmin": 135,
                    "Tmax": 46.71271052,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 22:30",
                    "Tmin": 136,
                    "Tmax": 46.35691603,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 22:40",
                    "Tmin": 137,
                    "Tmax": 46.04136861,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 22:50",
                    "Tmin": 138,
                    "Tmax": 45.76666891,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 23:00",
                    "Tmin": 139,
                    "Tmax": 45.53333984,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 23:10",
                    "Tmin": 140,
                    "Tmax": 45.34182556,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 23:20",
                    "Tmin": 141,
                    "Tmax": 45.19249062,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 23:30",
                    "Tmin": 142,
                    "Tmax": 45.08561929,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 23:40",
                    "Tmin": 143,
                    "Tmax": 45.02141501,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 23:50",
                    "Tmin": 144,
                    "Tmax": 45,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                }
            ]

            let Tu = 88; let Tl = 50; let Tmax = Number(req.query.min_temp); let Tmin = Number(req.query.max_temp); let alpha = 1;


            // if (!(Tmax)) {
            //     return res.status(400).json({ result: false, message: "Mximum Temprature field is required" });
            // }
            // if (!(Tmin)) {
            //     return res.status(400).json({ result: false, message: "Minimum Temprature field is required" });
            // }

            // console.log("sheet .length", sheet.length)
            let DegreeDaysData = []
            sheet.map(item => {
                let Tu = item.UpperThreshold; let Tl = item.LowerThreshold; let Tmax = Number(item.Tmax); let Tmin = Number(item.Tmin); let alpha = 1;

                var accomulator = 0
                sheet.map(i => {
                    let step1 = (item.Tmax - 50) < 0 ? 0 : item.Tmax - 50;
                    let adjusted = (1 / 6) * (item.Tmax - 88 > 0, step1 - (item.Tmax - 88), step1);
                    accomulator += adjusted
                })

                let DegreeDay = accomulator / 24
                // if (DegreeDay)
                DegreeDaysData.push(DegreeDay)
            })
            return res.status(200).json({ result: true, degree_day: DegreeDaysData });

        } catch (error) {
            console.log(error)
            return res.status(500).json({ result: false, error: error });
        }
    }
    static async getDegreeDays1(req, res) {
        try {
            let sheet = [
                {
                    "Column1": null,
                    "Tmin": 45,
                    "Tmax": 90,
                    "LowerThreshold": 50,
                    "UpperThreshold": 88,
                    "Column6": null,
                    "Amplitude ": 22.5
                },
                {
                    "Column1": "7\/1\/22 0:00",
                    "Tmin": 1,
                    "Tmax": 45.02141501,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": 18.03601277,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 0:10",
                    "Tmin": 2,
                    "Tmax": 45.08561929,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 0:20",
                    "Tmin": 3,
                    "Tmax": 45.19249062,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 0:30",
                    "Tmin": 4,
                    "Tmax": 45.34182556,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 0:40",
                    "Tmin": 5,
                    "Tmax": 45.53333984,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 0:50",
                    "Tmin": 6,
                    "Tmax": 45.76666891,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 1:00",
                    "Tmin": 7,
                    "Tmax": 46.04136861,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 1:10",
                    "Tmin": 8,
                    "Tmax": 46.35691603,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 1:20",
                    "Tmin": 9,
                    "Tmax": 46.71271052,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 1:30",
                    "Tmin": 10,
                    "Tmax": 47.10807479,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 1:40",
                    "Tmin": 11,
                    "Tmax": 47.54225625,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 1:50",
                    "Tmin": 12,
                    "Tmax": 48.01442841,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 2:00",
                    "Tmin": 13,
                    "Tmax": 48.52369247,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 2:10",
                    "Tmin": 14,
                    "Tmax": 49.069079,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 2:20",
                    "Tmin": 15,
                    "Tmax": 49.64954984,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 2:30",
                    "Tmin": 16,
                    "Tmax": 50.26400003,
                    "LowerThreshold": 0.2640000298,
                    "UpperThreshold": 0.04400000497,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 2:40",
                    "Tmin": 17,
                    "Tmax": 50.91125992,
                    "LowerThreshold": 0.9112599218,
                    "UpperThreshold": 0.1518766536,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 2:50",
                    "Tmin": 18,
                    "Tmax": 51.59009742,
                    "LowerThreshold": 1.590097423,
                    "UpperThreshold": 0.2650162372,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 3:00",
                    "Tmin": 19,
                    "Tmax": 52.29922033,
                    "LowerThreshold": 2.299220329,
                    "UpperThreshold": 0.3832033881,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 3:10",
                    "Tmin": 20,
                    "Tmax": 53.03727878,
                    "LowerThreshold": 3.037278782,
                    "UpperThreshold": 0.5062131303,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 3:20",
                    "Tmin": 21,
                    "Tmax": 53.80286785,
                    "LowerThreshold": 3.802867847,
                    "UpperThreshold": 0.6338113079,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 3:30",
                    "Tmin": 22,
                    "Tmax": 54.59453018,
                    "LowerThreshold": 4.594530182,
                    "UpperThreshold": 0.7657550304,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 3:40",
                    "Tmin": 23,
                    "Tmax": 55.41075881,
                    "LowerThreshold": 5.410758812,
                    "UpperThreshold": 0.9017931354,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 3:50",
                    "Tmin": 24,
                    "Tmax": 56.25,
                    "LowerThreshold": 6.25,
                    "UpperThreshold": 1.041666667,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 4:00",
                    "Tmin": 25,
                    "Tmax": 57.1106562,
                    "LowerThreshold": 7.110656202,
                    "UpperThreshold": 1.185109367,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 4:10",
                    "Tmin": 26,
                    "Tmax": 57.99108911,
                    "LowerThreshold": 7.991089111,
                    "UpperThreshold": 1.331848185,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 4:20",
                    "Tmin": 27,
                    "Tmax": 58.88962277,
                    "LowerThreshold": 8.889622772,
                    "UpperThreshold": 1.481603795,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 4:30",
                    "Tmin": 28,
                    "Tmax": 59.80454678,
                    "LowerThreshold": 9.804546775,
                    "UpperThreshold": 1.634091129,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 4:40",
                    "Tmin": 29,
                    "Tmax": 60.73411951,
                    "LowerThreshold": 10.73411951,
                    "UpperThreshold": 1.789019919,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 4:50",
                    "Tmin": 30,
                    "Tmax": 61.67657149,
                    "LowerThreshold": 11.67657149,
                    "UpperThreshold": 1.946095248,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 5:00",
                    "Tmin": 31,
                    "Tmax": 62.63010869,
                    "LowerThreshold": 12.63010869,
                    "UpperThreshold": 2.105018114,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 5:10",
                    "Tmin": 32,
                    "Tmax": 63.592916,
                    "LowerThreshold": 13.592916,
                    "UpperThreshold": 2.265486,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 5:20",
                    "Tmin": 33,
                    "Tmax": 64.56316068,
                    "LowerThreshold": 14.56316068,
                    "UpperThreshold": 2.427193446,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 5:30",
                    "Tmin": 34,
                    "Tmax": 65.53899579,
                    "LowerThreshold": 15.53899579,
                    "UpperThreshold": 2.589832631,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 5:40",
                    "Tmin": 35,
                    "Tmax": 66.51856378,
                    "LowerThreshold": 16.51856378,
                    "UpperThreshold": 2.753093964,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 5:50",
                    "Tmin": 36,
                    "Tmax": 67.5,
                    "LowerThreshold": 17.5,
                    "UpperThreshold": 2.916666667,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 6:00",
                    "Tmin": 37,
                    "Tmax": 68.48143622,
                    "LowerThreshold": 18.48143622,
                    "UpperThreshold": 3.080239369,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 6:10",
                    "Tmin": 38,
                    "Tmax": 69.46100421,
                    "LowerThreshold": 19.46100421,
                    "UpperThreshold": 3.243500702,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 6:20",
                    "Tmin": 39,
                    "Tmax": 70.43683932,
                    "LowerThreshold": 20.43683932,
                    "UpperThreshold": 3.406139887,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 6:30",
                    "Tmin": 40,
                    "Tmax": 71.407084,
                    "LowerThreshold": 21.407084,
                    "UpperThreshold": 3.567847333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 6:40",
                    "Tmin": 41,
                    "Tmax": 72.36989131,
                    "LowerThreshold": 22.36989131,
                    "UpperThreshold": 3.728315219,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 6:50",
                    "Tmin": 42,
                    "Tmax": 73.32342851,
                    "LowerThreshold": 23.32342851,
                    "UpperThreshold": 3.887238086,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 7:00",
                    "Tmin": 43,
                    "Tmax": 74.26588049,
                    "LowerThreshold": 24.26588049,
                    "UpperThreshold": 4.044313415,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 7:10",
                    "Tmin": 44,
                    "Tmax": 75.19545322,
                    "LowerThreshold": 25.19545322,
                    "UpperThreshold": 4.199242204,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 7:20",
                    "Tmin": 45,
                    "Tmax": 76.11037723,
                    "LowerThreshold": 26.11037723,
                    "UpperThreshold": 4.351729538,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 7:30",
                    "Tmin": 46,
                    "Tmax": 77.00891089,
                    "LowerThreshold": 27.00891089,
                    "UpperThreshold": 4.501485148,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 7:40",
                    "Tmin": 47,
                    "Tmax": 77.8893438,
                    "LowerThreshold": 27.8893438,
                    "UpperThreshold": 4.648223966,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 7:50",
                    "Tmin": 48,
                    "Tmax": 78.75,
                    "LowerThreshold": 28.75,
                    "UpperThreshold": 4.791666667,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 8:00",
                    "Tmin": 49,
                    "Tmax": 79.58924119,
                    "LowerThreshold": 29.58924119,
                    "UpperThreshold": 4.931540198,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 8:10",
                    "Tmin": 50,
                    "Tmax": 80.40546982,
                    "LowerThreshold": 30.40546982,
                    "UpperThreshold": 5.067578303,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 8:20",
                    "Tmin": 51,
                    "Tmax": 81.19713215,
                    "LowerThreshold": 31.19713215,
                    "UpperThreshold": 5.199522025,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 8:30",
                    "Tmin": 52,
                    "Tmax": 81.96272122,
                    "LowerThreshold": 31.96272122,
                    "UpperThreshold": 5.327120203,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 8:40",
                    "Tmin": 53,
                    "Tmax": 82.70077967,
                    "LowerThreshold": 32.70077967,
                    "UpperThreshold": 5.450129945,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 8:50",
                    "Tmin": 54,
                    "Tmax": 83.40990258,
                    "LowerThreshold": 33.40990258,
                    "UpperThreshold": 5.568317096,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 9:00",
                    "Tmin": 55,
                    "Tmax": 84.08874008,
                    "LowerThreshold": 34.08874008,
                    "UpperThreshold": 5.68145668,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 9:10",
                    "Tmin": 56,
                    "Tmax": 84.73599997,
                    "LowerThreshold": 34.73599997,
                    "UpperThreshold": 5.789333328,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 9:20",
                    "Tmin": 57,
                    "Tmax": 85.35045016,
                    "LowerThreshold": 35.35045016,
                    "UpperThreshold": 5.891741693,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 9:30",
                    "Tmin": 58,
                    "Tmax": 85.930921,
                    "LowerThreshold": 35.930921,
                    "UpperThreshold": 5.988486833,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 9:40",
                    "Tmin": 59,
                    "Tmax": 86.47630753,
                    "LowerThreshold": 36.47630753,
                    "UpperThreshold": 6.079384588,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 9:50",
                    "Tmin": 60,
                    "Tmax": 86.98557159,
                    "LowerThreshold": 36.98557159,
                    "UpperThreshold": 6.164261931,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 10:00",
                    "Tmin": 61,
                    "Tmax": 87.45774375,
                    "LowerThreshold": 37.45774375,
                    "UpperThreshold": 6.242957291,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 10:10",
                    "Tmin": 62,
                    "Tmax": 87.89192521,
                    "LowerThreshold": 37.89192521,
                    "UpperThreshold": 6.315320868,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 10:20",
                    "Tmin": 63,
                    "Tmax": 88.28728948,
                    "LowerThreshold": 38.28728948,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 10:30",
                    "Tmin": 64,
                    "Tmax": 88.64308397,
                    "LowerThreshold": 38.64308397,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 10:40",
                    "Tmin": 65,
                    "Tmax": 88.95863139,
                    "LowerThreshold": 38.95863139,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 10:50",
                    "Tmin": 66,
                    "Tmax": 89.23333109,
                    "LowerThreshold": 39.23333109,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 11:00",
                    "Tmin": 67,
                    "Tmax": 89.46666016,
                    "LowerThreshold": 39.46666016,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 11:10",
                    "Tmin": 68,
                    "Tmax": 89.65817444,
                    "LowerThreshold": 39.65817444,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 11:20",
                    "Tmin": 69,
                    "Tmax": 89.80750938,
                    "LowerThreshold": 39.80750938,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 11:30",
                    "Tmin": 70,
                    "Tmax": 89.91438071,
                    "LowerThreshold": 39.91438071,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 11:40",
                    "Tmin": 71,
                    "Tmax": 89.97858499,
                    "LowerThreshold": 39.97858499,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 11:50",
                    "Tmin": 72,
                    "Tmax": 90,
                    "LowerThreshold": 40,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 12:00",
                    "Tmin": 73,
                    "Tmax": 89.97858499,
                    "LowerThreshold": 39.97858499,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 12:10",
                    "Tmin": 74,
                    "Tmax": 89.91438071,
                    "LowerThreshold": 39.91438071,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 12:20",
                    "Tmin": 75,
                    "Tmax": 89.80750938,
                    "LowerThreshold": 39.80750938,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 12:30",
                    "Tmin": 76,
                    "Tmax": 89.65817444,
                    "LowerThreshold": 39.65817444,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 12:40",
                    "Tmin": 77,
                    "Tmax": 89.46666016,
                    "LowerThreshold": 39.46666016,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 12:50",
                    "Tmin": 78,
                    "Tmax": 89.23333109,
                    "LowerThreshold": 39.23333109,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 13:00",
                    "Tmin": 79,
                    "Tmax": 88.95863139,
                    "LowerThreshold": 38.95863139,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 13:10",
                    "Tmin": 80,
                    "Tmax": 88.64308397,
                    "LowerThreshold": 38.64308397,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 13:20",
                    "Tmin": 81,
                    "Tmax": 88.28728948,
                    "LowerThreshold": 38.28728948,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 13:30",
                    "Tmin": 82,
                    "Tmax": 87.89192521,
                    "LowerThreshold": 37.89192521,
                    "UpperThreshold": 6.315320868,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 13:40",
                    "Tmin": 83,
                    "Tmax": 87.45774375,
                    "LowerThreshold": 37.45774375,
                    "UpperThreshold": 6.242957291,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 13:50",
                    "Tmin": 84,
                    "Tmax": 86.98557159,
                    "LowerThreshold": 36.98557159,
                    "UpperThreshold": 6.164261931,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 14:00",
                    "Tmin": 85,
                    "Tmax": 86.47630753,
                    "LowerThreshold": 36.47630753,
                    "UpperThreshold": 6.079384588,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 14:10",
                    "Tmin": 86,
                    "Tmax": 85.930921,
                    "LowerThreshold": 35.930921,
                    "UpperThreshold": 5.988486833,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 14:20",
                    "Tmin": 87,
                    "Tmax": 85.35045016,
                    "LowerThreshold": 35.35045016,
                    "UpperThreshold": 5.891741693,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 14:30",
                    "Tmin": 88,
                    "Tmax": 84.73599997,
                    "LowerThreshold": 34.73599997,
                    "UpperThreshold": 5.789333328,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 14:40",
                    "Tmin": 89,
                    "Tmax": 84.08874008,
                    "LowerThreshold": 34.08874008,
                    "UpperThreshold": 5.68145668,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 14:50",
                    "Tmin": 90,
                    "Tmax": 83.40990258,
                    "LowerThreshold": 33.40990258,
                    "UpperThreshold": 5.568317096,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 15:00",
                    "Tmin": 91,
                    "Tmax": 82.70077967,
                    "LowerThreshold": 32.70077967,
                    "UpperThreshold": 5.450129945,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 15:10",
                    "Tmin": 92,
                    "Tmax": 81.96272122,
                    "LowerThreshold": 31.96272122,
                    "UpperThreshold": 5.327120203,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 15:20",
                    "Tmin": 93,
                    "Tmax": 81.19713215,
                    "LowerThreshold": 31.19713215,
                    "UpperThreshold": 5.199522025,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 15:30",
                    "Tmin": 94,
                    "Tmax": 80.40546982,
                    "LowerThreshold": 30.40546982,
                    "UpperThreshold": 5.067578303,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 15:40",
                    "Tmin": 95,
                    "Tmax": 79.58924119,
                    "LowerThreshold": 29.58924119,
                    "UpperThreshold": 4.931540198,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 15:50",
                    "Tmin": 96,
                    "Tmax": 78.75,
                    "LowerThreshold": 28.75,
                    "UpperThreshold": 4.791666667,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 16:00",
                    "Tmin": 97,
                    "Tmax": 77.8893438,
                    "LowerThreshold": 27.8893438,
                    "UpperThreshold": 4.648223966,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 16:10",
                    "Tmin": 98,
                    "Tmax": 77.00891089,
                    "LowerThreshold": 27.00891089,
                    "UpperThreshold": 4.501485148,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 16:20",
                    "Tmin": 99,
                    "Tmax": 76.11037723,
                    "LowerThreshold": 26.11037723,
                    "UpperThreshold": 4.351729538,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 16:30",
                    "Tmin": 100,
                    "Tmax": 75.19545322,
                    "LowerThreshold": 25.19545322,
                    "UpperThreshold": 4.199242204,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 16:40",
                    "Tmin": 101,
                    "Tmax": 74.26588049,
                    "LowerThreshold": 24.26588049,
                    "UpperThreshold": 4.044313415,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 16:50",
                    "Tmin": 102,
                    "Tmax": 73.32342851,
                    "LowerThreshold": 23.32342851,
                    "UpperThreshold": 3.887238086,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 17:00",
                    "Tmin": 103,
                    "Tmax": 72.36989131,
                    "LowerThreshold": 22.36989131,
                    "UpperThreshold": 3.728315219,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 17:10",
                    "Tmin": 104,
                    "Tmax": 71.407084,
                    "LowerThreshold": 21.407084,
                    "UpperThreshold": 3.567847333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 17:20",
                    "Tmin": 105,
                    "Tmax": 70.43683932,
                    "LowerThreshold": 20.43683932,
                    "UpperThreshold": 3.406139887,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 17:30",
                    "Tmin": 106,
                    "Tmax": 69.46100421,
                    "LowerThreshold": 19.46100421,
                    "UpperThreshold": 3.243500702,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 17:40",
                    "Tmin": 107,
                    "Tmax": 68.48143622,
                    "LowerThreshold": 18.48143622,
                    "UpperThreshold": 3.080239369,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 17:50",
                    "Tmin": 108,
                    "Tmax": 67.5,
                    "LowerThreshold": 17.5,
                    "UpperThreshold": 2.916666667,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 18:00",
                    "Tmin": 109,
                    "Tmax": 66.51856378,
                    "LowerThreshold": 16.51856378,
                    "UpperThreshold": 2.753093964,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 18:10",
                    "Tmin": 110,
                    "Tmax": 65.53899579,
                    "LowerThreshold": 15.53899579,
                    "UpperThreshold": 2.589832631,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 18:20",
                    "Tmin": 111,
                    "Tmax": 64.56316068,
                    "LowerThreshold": 14.56316068,
                    "UpperThreshold": 2.427193446,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 18:30",
                    "Tmin": 112,
                    "Tmax": 63.592916,
                    "LowerThreshold": 13.592916,
                    "UpperThreshold": 2.265486,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 18:40",
                    "Tmin": 113,
                    "Tmax": 62.63010869,
                    "LowerThreshold": 12.63010869,
                    "UpperThreshold": 2.105018114,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 18:50",
                    "Tmin": 114,
                    "Tmax": 61.67657149,
                    "LowerThreshold": 11.67657149,
                    "UpperThreshold": 1.946095248,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 19:00",
                    "Tmin": 115,
                    "Tmax": 60.73411951,
                    "LowerThreshold": 10.73411951,
                    "UpperThreshold": 1.789019919,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 19:10",
                    "Tmin": 116,
                    "Tmax": 59.80454678,
                    "LowerThreshold": 9.804546775,
                    "UpperThreshold": 1.634091129,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 19:20",
                    "Tmin": 117,
                    "Tmax": 58.88962277,
                    "LowerThreshold": 8.889622772,
                    "UpperThreshold": 1.481603795,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 19:30",
                    "Tmin": 118,
                    "Tmax": 57.99108911,
                    "LowerThreshold": 7.991089111,
                    "UpperThreshold": 1.331848185,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 19:40",
                    "Tmin": 119,
                    "Tmax": 57.1106562,
                    "LowerThreshold": 7.110656202,
                    "UpperThreshold": 1.185109367,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 19:50",
                    "Tmin": 120,
                    "Tmax": 56.25,
                    "LowerThreshold": 6.25,
                    "UpperThreshold": 1.041666667,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 20:00",
                    "Tmin": 121,
                    "Tmax": 55.41075881,
                    "LowerThreshold": 5.410758812,
                    "UpperThreshold": 0.9017931354,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 20:10",
                    "Tmin": 122,
                    "Tmax": 54.59453018,
                    "LowerThreshold": 4.594530182,
                    "UpperThreshold": 0.7657550304,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 20:20",
                    "Tmin": 123,
                    "Tmax": 53.80286785,
                    "LowerThreshold": 3.802867847,
                    "UpperThreshold": 0.6338113079,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 20:30",
                    "Tmin": 124,
                    "Tmax": 53.03727878,
                    "LowerThreshold": 3.037278782,
                    "UpperThreshold": 0.5062131303,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 20:40",
                    "Tmin": 125,
                    "Tmax": 52.29922033,
                    "LowerThreshold": 2.299220329,
                    "UpperThreshold": 0.3832033881,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 20:50",
                    "Tmin": 126,
                    "Tmax": 51.59009742,
                    "LowerThreshold": 1.590097423,
                    "UpperThreshold": 0.2650162372,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 21:00",
                    "Tmin": 127,
                    "Tmax": 50.91125992,
                    "LowerThreshold": 0.9112599218,
                    "UpperThreshold": 0.1518766536,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 21:10",
                    "Tmin": 128,
                    "Tmax": 50.26400003,
                    "LowerThreshold": 0.2640000298,
                    "UpperThreshold": 0.04400000497,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 21:20",
                    "Tmin": 129,
                    "Tmax": 49.64954984,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 21:30",
                    "Tmin": 130,
                    "Tmax": 49.069079,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 21:40",
                    "Tmin": 131,
                    "Tmax": 48.52369247,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 21:50",
                    "Tmin": 132,
                    "Tmax": 48.01442841,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 22:00",
                    "Tmin": 133,
                    "Tmax": 47.54225625,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 22:10",
                    "Tmin": 134,
                    "Tmax": 47.10807479,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 22:20",
                    "Tmin": 135,
                    "Tmax": 46.71271052,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 22:30",
                    "Tmin": 136,
                    "Tmax": 46.35691603,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 22:40",
                    "Tmin": 137,
                    "Tmax": 46.04136861,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 22:50",
                    "Tmin": 138,
                    "Tmax": 45.76666891,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 23:00",
                    "Tmin": 139,
                    "Tmax": 45.53333984,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 23:10",
                    "Tmin": 140,
                    "Tmax": 45.34182556,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 23:20",
                    "Tmin": 141,
                    "Tmax": 45.19249062,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 23:30",
                    "Tmin": 142,
                    "Tmax": 45.08561929,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 23:40",
                    "Tmin": 143,
                    "Tmax": 45.02141501,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 23:50",
                    "Tmin": 144,
                    "Tmax": 45,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                }
            ]

            let Tu = 88; let Tl = 50; let Tmax = Number(req.query.min_temp); let Tmin = Number(req.query.max_temp); let alpha = 1;


            if (!(Tmax)) {
                return res.status(400).json({ result: false, message: "Mximum Temprature field is required" });
            }
            if (!(Tmin)) {
                return res.status(400).json({ result: false, message: "Minimum Temprature field is required" });
            }

            let DegreeDaysData = []
            sheet.map(item => {
                let Tu = item.UpperThreshold; let Tl = item.LowerThreshold; let Tmax = Number(item.Tmax); let Tmin = Number(item.Tmin); let alpha = 1;

                let O2 = 1 / Math.sin((Tu - (Tmax + Tmin / 2)) / alpha)
                let part1 = (((Tmax + Tmin) / 2) - Tl) * (O2 + (3.14 / 2));
                let part2 = (Tu - Tl) * ((3.14 / 2) - O2)
                let part3 = ((alpha) * (Math.cos(O2)))
                console.log(part2, part3)
                let DegreeDay = (1 / 3.14) * (part1 + part2 - part3)
                if (DegreeDay)
                    DegreeDaysData.push(DegreeDay)
            })
            // let O2 = 1 / Math.sin((Tu - (Tmax + Tmin / 2)) / alpha)
            // let part1 = (((Tmax + Tmin) / 2) - Tl) * (O2 + (3.14 / 2));
            // let part2 = (Tu - Tl) * ((3.14 / 2) - O2)
            // let part3 = ((alpha) * (Math.cos(O2)))
            // console.log(part2, part3)
            // let DegreeDay = (1 / 3.14) * (part1 + part2 - part3)
            return res.status(200).json({ result: true, degree_day: DegreeDaysData });

        } catch (error) {
            console.log(error)
            return res.status(500).json({ result: false, error: error });
        }
    }
    static async getDegreeDays2(req, res) {
        try {
            let sheet = [
                {
                    "Column1": null,
                    "Tmin": 45,
                    "Tmax": 90,
                    "LowerThreshold": 50,
                    "UpperThreshold": 88,
                    "Column6": null,
                    "Amplitude ": 22.5
                },
                {
                    "Column1": "7\/1\/22 0:00",
                    "Tmin": 1,
                    "Tmax": 45.02141501,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": 18.03601277,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 0:10",
                    "Tmin": 2,
                    "Tmax": 45.08561929,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 0:20",
                    "Tmin": 3,
                    "Tmax": 45.19249062,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 0:30",
                    "Tmin": 4,
                    "Tmax": 45.34182556,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 0:40",
                    "Tmin": 5,
                    "Tmax": 45.53333984,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 0:50",
                    "Tmin": 6,
                    "Tmax": 45.76666891,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 1:00",
                    "Tmin": 7,
                    "Tmax": 46.04136861,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 1:10",
                    "Tmin": 8,
                    "Tmax": 46.35691603,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 1:20",
                    "Tmin": 9,
                    "Tmax": 46.71271052,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 1:30",
                    "Tmin": 10,
                    "Tmax": 47.10807479,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 1:40",
                    "Tmin": 11,
                    "Tmax": 47.54225625,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 1:50",
                    "Tmin": 12,
                    "Tmax": 48.01442841,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 2:00",
                    "Tmin": 13,
                    "Tmax": 48.52369247,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 2:10",
                    "Tmin": 14,
                    "Tmax": 49.069079,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 2:20",
                    "Tmin": 15,
                    "Tmax": 49.64954984,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 2:30",
                    "Tmin": 16,
                    "Tmax": 50.26400003,
                    "LowerThreshold": 0.2640000298,
                    "UpperThreshold": 0.04400000497,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 2:40",
                    "Tmin": 17,
                    "Tmax": 50.91125992,
                    "LowerThreshold": 0.9112599218,
                    "UpperThreshold": 0.1518766536,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 2:50",
                    "Tmin": 18,
                    "Tmax": 51.59009742,
                    "LowerThreshold": 1.590097423,
                    "UpperThreshold": 0.2650162372,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 3:00",
                    "Tmin": 19,
                    "Tmax": 52.29922033,
                    "LowerThreshold": 2.299220329,
                    "UpperThreshold": 0.3832033881,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 3:10",
                    "Tmin": 20,
                    "Tmax": 53.03727878,
                    "LowerThreshold": 3.037278782,
                    "UpperThreshold": 0.5062131303,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 3:20",
                    "Tmin": 21,
                    "Tmax": 53.80286785,
                    "LowerThreshold": 3.802867847,
                    "UpperThreshold": 0.6338113079,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 3:30",
                    "Tmin": 22,
                    "Tmax": 54.59453018,
                    "LowerThreshold": 4.594530182,
                    "UpperThreshold": 0.7657550304,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 3:40",
                    "Tmin": 23,
                    "Tmax": 55.41075881,
                    "LowerThreshold": 5.410758812,
                    "UpperThreshold": 0.9017931354,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 3:50",
                    "Tmin": 24,
                    "Tmax": 56.25,
                    "LowerThreshold": 6.25,
                    "UpperThreshold": 1.041666667,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 4:00",
                    "Tmin": 25,
                    "Tmax": 57.1106562,
                    "LowerThreshold": 7.110656202,
                    "UpperThreshold": 1.185109367,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 4:10",
                    "Tmin": 26,
                    "Tmax": 57.99108911,
                    "LowerThreshold": 7.991089111,
                    "UpperThreshold": 1.331848185,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 4:20",
                    "Tmin": 27,
                    "Tmax": 58.88962277,
                    "LowerThreshold": 8.889622772,
                    "UpperThreshold": 1.481603795,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 4:30",
                    "Tmin": 28,
                    "Tmax": 59.80454678,
                    "LowerThreshold": 9.804546775,
                    "UpperThreshold": 1.634091129,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 4:40",
                    "Tmin": 29,
                    "Tmax": 60.73411951,
                    "LowerThreshold": 10.73411951,
                    "UpperThreshold": 1.789019919,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 4:50",
                    "Tmin": 30,
                    "Tmax": 61.67657149,
                    "LowerThreshold": 11.67657149,
                    "UpperThreshold": 1.946095248,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 5:00",
                    "Tmin": 31,
                    "Tmax": 62.63010869,
                    "LowerThreshold": 12.63010869,
                    "UpperThreshold": 2.105018114,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 5:10",
                    "Tmin": 32,
                    "Tmax": 63.592916,
                    "LowerThreshold": 13.592916,
                    "UpperThreshold": 2.265486,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 5:20",
                    "Tmin": 33,
                    "Tmax": 64.56316068,
                    "LowerThreshold": 14.56316068,
                    "UpperThreshold": 2.427193446,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 5:30",
                    "Tmin": 34,
                    "Tmax": 65.53899579,
                    "LowerThreshold": 15.53899579,
                    "UpperThreshold": 2.589832631,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 5:40",
                    "Tmin": 35,
                    "Tmax": 66.51856378,
                    "LowerThreshold": 16.51856378,
                    "UpperThreshold": 2.753093964,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 5:50",
                    "Tmin": 36,
                    "Tmax": 67.5,
                    "LowerThreshold": 17.5,
                    "UpperThreshold": 2.916666667,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 6:00",
                    "Tmin": 37,
                    "Tmax": 68.48143622,
                    "LowerThreshold": 18.48143622,
                    "UpperThreshold": 3.080239369,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 6:10",
                    "Tmin": 38,
                    "Tmax": 69.46100421,
                    "LowerThreshold": 19.46100421,
                    "UpperThreshold": 3.243500702,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 6:20",
                    "Tmin": 39,
                    "Tmax": 70.43683932,
                    "LowerThreshold": 20.43683932,
                    "UpperThreshold": 3.406139887,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 6:30",
                    "Tmin": 40,
                    "Tmax": 71.407084,
                    "LowerThreshold": 21.407084,
                    "UpperThreshold": 3.567847333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 6:40",
                    "Tmin": 41,
                    "Tmax": 72.36989131,
                    "LowerThreshold": 22.36989131,
                    "UpperThreshold": 3.728315219,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 6:50",
                    "Tmin": 42,
                    "Tmax": 73.32342851,
                    "LowerThreshold": 23.32342851,
                    "UpperThreshold": 3.887238086,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 7:00",
                    "Tmin": 43,
                    "Tmax": 74.26588049,
                    "LowerThreshold": 24.26588049,
                    "UpperThreshold": 4.044313415,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 7:10",
                    "Tmin": 44,
                    "Tmax": 75.19545322,
                    "LowerThreshold": 25.19545322,
                    "UpperThreshold": 4.199242204,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 7:20",
                    "Tmin": 45,
                    "Tmax": 76.11037723,
                    "LowerThreshold": 26.11037723,
                    "UpperThreshold": 4.351729538,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 7:30",
                    "Tmin": 46,
                    "Tmax": 77.00891089,
                    "LowerThreshold": 27.00891089,
                    "UpperThreshold": 4.501485148,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 7:40",
                    "Tmin": 47,
                    "Tmax": 77.8893438,
                    "LowerThreshold": 27.8893438,
                    "UpperThreshold": 4.648223966,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 7:50",
                    "Tmin": 48,
                    "Tmax": 78.75,
                    "LowerThreshold": 28.75,
                    "UpperThreshold": 4.791666667,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 8:00",
                    "Tmin": 49,
                    "Tmax": 79.58924119,
                    "LowerThreshold": 29.58924119,
                    "UpperThreshold": 4.931540198,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 8:10",
                    "Tmin": 50,
                    "Tmax": 80.40546982,
                    "LowerThreshold": 30.40546982,
                    "UpperThreshold": 5.067578303,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 8:20",
                    "Tmin": 51,
                    "Tmax": 81.19713215,
                    "LowerThreshold": 31.19713215,
                    "UpperThreshold": 5.199522025,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 8:30",
                    "Tmin": 52,
                    "Tmax": 81.96272122,
                    "LowerThreshold": 31.96272122,
                    "UpperThreshold": 5.327120203,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 8:40",
                    "Tmin": 53,
                    "Tmax": 82.70077967,
                    "LowerThreshold": 32.70077967,
                    "UpperThreshold": 5.450129945,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 8:50",
                    "Tmin": 54,
                    "Tmax": 83.40990258,
                    "LowerThreshold": 33.40990258,
                    "UpperThreshold": 5.568317096,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 9:00",
                    "Tmin": 55,
                    "Tmax": 84.08874008,
                    "LowerThreshold": 34.08874008,
                    "UpperThreshold": 5.68145668,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 9:10",
                    "Tmin": 56,
                    "Tmax": 84.73599997,
                    "LowerThreshold": 34.73599997,
                    "UpperThreshold": 5.789333328,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 9:20",
                    "Tmin": 57,
                    "Tmax": 85.35045016,
                    "LowerThreshold": 35.35045016,
                    "UpperThreshold": 5.891741693,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 9:30",
                    "Tmin": 58,
                    "Tmax": 85.930921,
                    "LowerThreshold": 35.930921,
                    "UpperThreshold": 5.988486833,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 9:40",
                    "Tmin": 59,
                    "Tmax": 86.47630753,
                    "LowerThreshold": 36.47630753,
                    "UpperThreshold": 6.079384588,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 9:50",
                    "Tmin": 60,
                    "Tmax": 86.98557159,
                    "LowerThreshold": 36.98557159,
                    "UpperThreshold": 6.164261931,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 10:00",
                    "Tmin": 61,
                    "Tmax": 87.45774375,
                    "LowerThreshold": 37.45774375,
                    "UpperThreshold": 6.242957291,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 10:10",
                    "Tmin": 62,
                    "Tmax": 87.89192521,
                    "LowerThreshold": 37.89192521,
                    "UpperThreshold": 6.315320868,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 10:20",
                    "Tmin": 63,
                    "Tmax": 88.28728948,
                    "LowerThreshold": 38.28728948,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 10:30",
                    "Tmin": 64,
                    "Tmax": 88.64308397,
                    "LowerThreshold": 38.64308397,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 10:40",
                    "Tmin": 65,
                    "Tmax": 88.95863139,
                    "LowerThreshold": 38.95863139,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 10:50",
                    "Tmin": 66,
                    "Tmax": 89.23333109,
                    "LowerThreshold": 39.23333109,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 11:00",
                    "Tmin": 67,
                    "Tmax": 89.46666016,
                    "LowerThreshold": 39.46666016,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 11:10",
                    "Tmin": 68,
                    "Tmax": 89.65817444,
                    "LowerThreshold": 39.65817444,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 11:20",
                    "Tmin": 69,
                    "Tmax": 89.80750938,
                    "LowerThreshold": 39.80750938,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 11:30",
                    "Tmin": 70,
                    "Tmax": 89.91438071,
                    "LowerThreshold": 39.91438071,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 11:40",
                    "Tmin": 71,
                    "Tmax": 89.97858499,
                    "LowerThreshold": 39.97858499,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 11:50",
                    "Tmin": 72,
                    "Tmax": 90,
                    "LowerThreshold": 40,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 12:00",
                    "Tmin": 73,
                    "Tmax": 89.97858499,
                    "LowerThreshold": 39.97858499,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 12:10",
                    "Tmin": 74,
                    "Tmax": 89.91438071,
                    "LowerThreshold": 39.91438071,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 12:20",
                    "Tmin": 75,
                    "Tmax": 89.80750938,
                    "LowerThreshold": 39.80750938,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 12:30",
                    "Tmin": 76,
                    "Tmax": 89.65817444,
                    "LowerThreshold": 39.65817444,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 12:40",
                    "Tmin": 77,
                    "Tmax": 89.46666016,
                    "LowerThreshold": 39.46666016,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 12:50",
                    "Tmin": 78,
                    "Tmax": 89.23333109,
                    "LowerThreshold": 39.23333109,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 13:00",
                    "Tmin": 79,
                    "Tmax": 88.95863139,
                    "LowerThreshold": 38.95863139,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 13:10",
                    "Tmin": 80,
                    "Tmax": 88.64308397,
                    "LowerThreshold": 38.64308397,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 13:20",
                    "Tmin": 81,
                    "Tmax": 88.28728948,
                    "LowerThreshold": 38.28728948,
                    "UpperThreshold": 6.333333333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 13:30",
                    "Tmin": 82,
                    "Tmax": 87.89192521,
                    "LowerThreshold": 37.89192521,
                    "UpperThreshold": 6.315320868,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 13:40",
                    "Tmin": 83,
                    "Tmax": 87.45774375,
                    "LowerThreshold": 37.45774375,
                    "UpperThreshold": 6.242957291,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 13:50",
                    "Tmin": 84,
                    "Tmax": 86.98557159,
                    "LowerThreshold": 36.98557159,
                    "UpperThreshold": 6.164261931,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 14:00",
                    "Tmin": 85,
                    "Tmax": 86.47630753,
                    "LowerThreshold": 36.47630753,
                    "UpperThreshold": 6.079384588,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 14:10",
                    "Tmin": 86,
                    "Tmax": 85.930921,
                    "LowerThreshold": 35.930921,
                    "UpperThreshold": 5.988486833,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 14:20",
                    "Tmin": 87,
                    "Tmax": 85.35045016,
                    "LowerThreshold": 35.35045016,
                    "UpperThreshold": 5.891741693,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 14:30",
                    "Tmin": 88,
                    "Tmax": 84.73599997,
                    "LowerThreshold": 34.73599997,
                    "UpperThreshold": 5.789333328,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 14:40",
                    "Tmin": 89,
                    "Tmax": 84.08874008,
                    "LowerThreshold": 34.08874008,
                    "UpperThreshold": 5.68145668,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 14:50",
                    "Tmin": 90,
                    "Tmax": 83.40990258,
                    "LowerThreshold": 33.40990258,
                    "UpperThreshold": 5.568317096,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 15:00",
                    "Tmin": 91,
                    "Tmax": 82.70077967,
                    "LowerThreshold": 32.70077967,
                    "UpperThreshold": 5.450129945,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 15:10",
                    "Tmin": 92,
                    "Tmax": 81.96272122,
                    "LowerThreshold": 31.96272122,
                    "UpperThreshold": 5.327120203,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 15:20",
                    "Tmin": 93,
                    "Tmax": 81.19713215,
                    "LowerThreshold": 31.19713215,
                    "UpperThreshold": 5.199522025,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 15:30",
                    "Tmin": 94,
                    "Tmax": 80.40546982,
                    "LowerThreshold": 30.40546982,
                    "UpperThreshold": 5.067578303,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 15:40",
                    "Tmin": 95,
                    "Tmax": 79.58924119,
                    "LowerThreshold": 29.58924119,
                    "UpperThreshold": 4.931540198,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 15:50",
                    "Tmin": 96,
                    "Tmax": 78.75,
                    "LowerThreshold": 28.75,
                    "UpperThreshold": 4.791666667,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 16:00",
                    "Tmin": 97,
                    "Tmax": 77.8893438,
                    "LowerThreshold": 27.8893438,
                    "UpperThreshold": 4.648223966,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 16:10",
                    "Tmin": 98,
                    "Tmax": 77.00891089,
                    "LowerThreshold": 27.00891089,
                    "UpperThreshold": 4.501485148,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 16:20",
                    "Tmin": 99,
                    "Tmax": 76.11037723,
                    "LowerThreshold": 26.11037723,
                    "UpperThreshold": 4.351729538,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 16:30",
                    "Tmin": 100,
                    "Tmax": 75.19545322,
                    "LowerThreshold": 25.19545322,
                    "UpperThreshold": 4.199242204,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 16:40",
                    "Tmin": 101,
                    "Tmax": 74.26588049,
                    "LowerThreshold": 24.26588049,
                    "UpperThreshold": 4.044313415,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 16:50",
                    "Tmin": 102,
                    "Tmax": 73.32342851,
                    "LowerThreshold": 23.32342851,
                    "UpperThreshold": 3.887238086,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 17:00",
                    "Tmin": 103,
                    "Tmax": 72.36989131,
                    "LowerThreshold": 22.36989131,
                    "UpperThreshold": 3.728315219,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 17:10",
                    "Tmin": 104,
                    "Tmax": 71.407084,
                    "LowerThreshold": 21.407084,
                    "UpperThreshold": 3.567847333,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 17:20",
                    "Tmin": 105,
                    "Tmax": 70.43683932,
                    "LowerThreshold": 20.43683932,
                    "UpperThreshold": 3.406139887,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 17:30",
                    "Tmin": 106,
                    "Tmax": 69.46100421,
                    "LowerThreshold": 19.46100421,
                    "UpperThreshold": 3.243500702,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 17:40",
                    "Tmin": 107,
                    "Tmax": 68.48143622,
                    "LowerThreshold": 18.48143622,
                    "UpperThreshold": 3.080239369,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 17:50",
                    "Tmin": 108,
                    "Tmax": 67.5,
                    "LowerThreshold": 17.5,
                    "UpperThreshold": 2.916666667,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 18:00",
                    "Tmin": 109,
                    "Tmax": 66.51856378,
                    "LowerThreshold": 16.51856378,
                    "UpperThreshold": 2.753093964,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 18:10",
                    "Tmin": 110,
                    "Tmax": 65.53899579,
                    "LowerThreshold": 15.53899579,
                    "UpperThreshold": 2.589832631,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 18:20",
                    "Tmin": 111,
                    "Tmax": 64.56316068,
                    "LowerThreshold": 14.56316068,
                    "UpperThreshold": 2.427193446,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 18:30",
                    "Tmin": 112,
                    "Tmax": 63.592916,
                    "LowerThreshold": 13.592916,
                    "UpperThreshold": 2.265486,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 18:40",
                    "Tmin": 113,
                    "Tmax": 62.63010869,
                    "LowerThreshold": 12.63010869,
                    "UpperThreshold": 2.105018114,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 18:50",
                    "Tmin": 114,
                    "Tmax": 61.67657149,
                    "LowerThreshold": 11.67657149,
                    "UpperThreshold": 1.946095248,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 19:00",
                    "Tmin": 115,
                    "Tmax": 60.73411951,
                    "LowerThreshold": 10.73411951,
                    "UpperThreshold": 1.789019919,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 19:10",
                    "Tmin": 116,
                    "Tmax": 59.80454678,
                    "LowerThreshold": 9.804546775,
                    "UpperThreshold": 1.634091129,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 19:20",
                    "Tmin": 117,
                    "Tmax": 58.88962277,
                    "LowerThreshold": 8.889622772,
                    "UpperThreshold": 1.481603795,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 19:30",
                    "Tmin": 118,
                    "Tmax": 57.99108911,
                    "LowerThreshold": 7.991089111,
                    "UpperThreshold": 1.331848185,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 19:40",
                    "Tmin": 119,
                    "Tmax": 57.1106562,
                    "LowerThreshold": 7.110656202,
                    "UpperThreshold": 1.185109367,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 19:50",
                    "Tmin": 120,
                    "Tmax": 56.25,
                    "LowerThreshold": 6.25,
                    "UpperThreshold": 1.041666667,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 20:00",
                    "Tmin": 121,
                    "Tmax": 55.41075881,
                    "LowerThreshold": 5.410758812,
                    "UpperThreshold": 0.9017931354,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 20:10",
                    "Tmin": 122,
                    "Tmax": 54.59453018,
                    "LowerThreshold": 4.594530182,
                    "UpperThreshold": 0.7657550304,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 20:20",
                    "Tmin": 123,
                    "Tmax": 53.80286785,
                    "LowerThreshold": 3.802867847,
                    "UpperThreshold": 0.6338113079,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 20:30",
                    "Tmin": 124,
                    "Tmax": 53.03727878,
                    "LowerThreshold": 3.037278782,
                    "UpperThreshold": 0.5062131303,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 20:40",
                    "Tmin": 125,
                    "Tmax": 52.29922033,
                    "LowerThreshold": 2.299220329,
                    "UpperThreshold": 0.3832033881,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 20:50",
                    "Tmin": 126,
                    "Tmax": 51.59009742,
                    "LowerThreshold": 1.590097423,
                    "UpperThreshold": 0.2650162372,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 21:00",
                    "Tmin": 127,
                    "Tmax": 50.91125992,
                    "LowerThreshold": 0.9112599218,
                    "UpperThreshold": 0.1518766536,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 21:10",
                    "Tmin": 128,
                    "Tmax": 50.26400003,
                    "LowerThreshold": 0.2640000298,
                    "UpperThreshold": 0.04400000497,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 21:20",
                    "Tmin": 129,
                    "Tmax": 49.64954984,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 21:30",
                    "Tmin": 130,
                    "Tmax": 49.069079,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 21:40",
                    "Tmin": 131,
                    "Tmax": 48.52369247,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 21:50",
                    "Tmin": 132,
                    "Tmax": 48.01442841,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 22:00",
                    "Tmin": 133,
                    "Tmax": 47.54225625,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 22:10",
                    "Tmin": 134,
                    "Tmax": 47.10807479,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 22:20",
                    "Tmin": 135,
                    "Tmax": 46.71271052,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 22:30",
                    "Tmin": 136,
                    "Tmax": 46.35691603,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 22:40",
                    "Tmin": 137,
                    "Tmax": 46.04136861,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 22:50",
                    "Tmin": 138,
                    "Tmax": 45.76666891,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 23:00",
                    "Tmin": 139,
                    "Tmax": 45.53333984,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 23:10",
                    "Tmin": 140,
                    "Tmax": 45.34182556,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 23:20",
                    "Tmin": 141,
                    "Tmax": 45.19249062,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 23:30",
                    "Tmin": 142,
                    "Tmax": 45.08561929,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 23:40",
                    "Tmin": 143,
                    "Tmax": 45.02141501,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                },
                {
                    "Column1": "7\/1\/22 23:50",
                    "Tmin": 144,
                    "Tmax": 45,
                    "LowerThreshold": 0,
                    "UpperThreshold": 0,
                    "Column6": null,
                    "Amplitude ": null
                }
            ]

            let Tu = 88; let Tl = 50; let Tmax = Number(req.query.min_temp); let Tmin = Number(req.query.max_temp); let alpha = 1;


            if (!(Tmax)) {
                return res.status(400).json({ result: false, message: "Mximum Temprature field is required" });
            }
            if (!(Tmin)) {
                return res.status(400).json({ result: false, message: "Minimum Temprature field is required" });
            }

            let DegreeDaysData = []
            sheet.map(item => {
                let Tu = item.UpperThreshold; let Tl = item.LowerThreshold; let Tmax = Number(item.Tmax); let Tmin = Number(item.Tmin); let alpha = 1;

                let O2 = 1 / Math.sin((Tu - (Tmax + Tmin / 2)) / alpha)
                let part1 = (((Tmax + Tmin) / 2) - Tl) * (O2 + (3.14 / 2));
                let part2 = (Tu - Tl) * ((3.14 / 2) - O2)
                let part3 = ((alpha) * (Math.cos(O2)))
                console.log(part2, part3)
                let DegreeDay = (1 / 3.14) * (part1 + part2 - part3)
                if (DegreeDay)
                    DegreeDaysData.push(DegreeDay)
            })
            // let O2 = 1 / Math.sin((Tu - (Tmax + Tmin / 2)) / alpha)
            // let part1 = (((Tmax + Tmin) / 2) - Tl) * (O2 + (3.14 / 2));
            // let part2 = (Tu - Tl) * ((3.14 / 2) - O2)
            // let part3 = ((alpha) * (Math.cos(O2)))
            // console.log(part2, part3)
            // let DegreeDay = (1 / 3.14) * (part1 + part2 - part3)
            return res.status(200).json({ result: true, degree_day: DegreeDaysData });

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