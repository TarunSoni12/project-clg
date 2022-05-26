
// import mongodb
const mongodb = require("mongodb");

const url = "mongodb+srv://tarunsoni:taru$oni@cluster0.fktol.mongodb.net/restaurantDB?retryWrites=true&w=majority"

const mongodbClient = mongodb.MongoClient;

var connectedClient; 

exports.connect = ()=>{
    mongodbClient.connect(url)
        .then((client)=>{
            connectedClient=client;
            console.log("DB Connected");
        })
        .catch(err=>{console.log(err)});
} 

exports.getcollection = (nameOfCollection)=>{
    return connectedClient.db("restaurantDB").collection(nameOfCollection);
}