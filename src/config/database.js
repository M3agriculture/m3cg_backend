require('dotenv').config();
const mongoose = require("mongoose");

exports.connect = () => {
    console.log
    // Connecting to the database
    mongoose
        .connect(process.env.DB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log("Successfully connected to database");
        })
        .catch((error) => {
            console.log("database connection failed. exiting now...");
            console.error(error);
            process.exit(1);
        });
};