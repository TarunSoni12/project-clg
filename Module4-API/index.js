// 1. import express
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// import routes
const restaurantRoutes = require("./restaurant/routes/api_restaurant");

const mongodb = require("./config/mongodb");
mongodb.connect();

// 2. creating server
const server = express();
server.use(cors());

// 3. Assigning port to server
server.listen("3100");

// Handle API request
server.use(bodyParser.json());
server.use("/api/restaurant", restaurantRoutes);

// 4. Handle default request from client
server.get("/", (req, res) => {
    res.send("Hello From Express");
})

console.log("express is listening on 3200");