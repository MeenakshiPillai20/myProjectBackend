const {MongoClient} = require("mongodb");

const url = "mongodb+srv://meenakshi11:2DiLFb06IJmJETEp@cluster0.b6sd7wx.mongodb.net/projectManagement?retryWrites=true&w=majority";

const client = new MongoClient(url);
const database = client.db("projectManagement");

const insertToDb = async(data) => {
    try {
        await client.connect();
        console.log("db connected");
        const collection = database.collection("registeredUsers")
        const userData = await collection.insertMany([data]);
        await client.close();
        return userData;
    } catch (error) {
        return error.message;
    }
}

const findOneFromDb = async (data) => {
    try {
        await client.connect();
        const collection = database.collection("registeredUsers")
        const dbResponse = await collection.findOne(data);
        await client.close();
        return dbResponse;
        
    } catch (error) {
        return error.message;
    }
   
}

module.exports = {insertToDb, findOneFromDb };