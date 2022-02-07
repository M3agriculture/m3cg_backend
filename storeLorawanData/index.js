// Import devices
const devices_locs = require("./config/dev_locs");

// Import the MongoDB driver
const MongoClient = require("mongodb").MongoClient;
// Define connection
const MONGODB_URI = "mongodb+srv://m3cg-lorawan:m3cgLorawan2021@m3cg-free-cluster.pqylk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Once we connect to the database once, we'll store that connection and reuse it so that we don't have to connect to the database on every request.
let cachedDb = null;

async function connectToDatabase() {
    if (cachedDb) {
        return cachedDb;
    }
    // Connect to our MongoDB database hosted on MongoDB Atlas
    const client = await MongoClient.connect(MONGODB_URI);
    // Specify which database we want to use
    const db = await client.db("m3cg");
    cachedDb = db;
    return db;
}

exports.handler = async (event, context) => {

    /* By default, the callback waits until the runtime event loop is empty before freezing the process and returning the results to the caller. Setting this property to false requests that AWS Lambda freeze the process soon after the callback is invoked, even if there are events in the event loop. AWS Lambda will freeze the process, any state data, and the events in the event loop. Any remaining events in the event loop are processed when the Lambda function is next invoked, if AWS Lambda chooses to use the frozen process. */
    context.callbackWaitsForEmptyEventLoop = false;

    // Get an instance of our database
    const db = await connectToDatabase();
    // TODO implement
    const data = event;
    let device_array = devices_locs.devices;
    let result = device_array.filter(obj => {
      return obj.device_id == data.dev_eui
    });
    let deviceNewLoc = result ? result[0] : null;
    if(parseFloat(data.decoded.payload.temperature) != 327.67) {
        db.collection('lorawandevices').insertOne({
            device_id: data.dev_eui,
            lat: deviceNewLoc ? deviceNewLoc.lat : data.hotspots[0].lat,
            lng: deviceNewLoc ? deviceNewLoc.lat : data.hotspots[0].long,
            humidity: data.decoded.payload.humidity,
            temperature: data.decoded.payload.temperature,
            external_temperature: data.decoded.payload.external_temperature,
            reported_at: data.reported_at,
            uuid: data.uuid
        })
            .then(function (result) {
                return JSON.stringify(result);
            });
    }
    return JSON.stringify({"message": "Data skipped"});
};