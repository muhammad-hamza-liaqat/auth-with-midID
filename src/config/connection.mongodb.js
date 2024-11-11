const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI;
const dbName = process.env.MONGO_NAME;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB() {
    if (!client.isConnected) {
        await client.connect();
        console.log("Connected to MongoDB");
    }
    return client.db(dbName);
}

module.exports = connectDB;
