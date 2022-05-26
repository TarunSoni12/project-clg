const res = require("express/lib/response");
const restaurant = require("../models/restaurant");
const repo = require("../repository/restaurant");

const url = require("url");

// Trying to add restaurant
exports.addRestaurant = (req, res) => {
    console.log(req.body);
    const newRestaurant = 
    new restaurant(null, req.body.name, req.body.location, req.body.website, req.body.contact);
     repo.add(newRestaurant, ()=>{
          res.send("Data added");
    })
}

exports.getAllRestaurants = (req, res) => {
    repo.getAll((restaurants) =>  {
        res.send(restaurants);
    })
}

exports.getRestaurantByID = (req, res) => {
    const id = req.params.id; 
     console.log(id);
    repo.getByID(id, (Restaurant) => {
        res.send(Restaurant);
    })
}

exports.getRestaurantByLocation = (req, res) => {
    const location = req.params.location; 
     console.log(location);
    repo.getByLocation(location, (Restaurant) => {
        res.send(Restaurant);
    })
}

exports.searchRestaurant = (req, res) => {
    const search = req.params.string; 
    repo.searchString(search, (Restaurant) => {
        res.send(Restaurant);
    });
}

exports.updateRestaurant = (req, res) => {
    console.log(req.body);
    const restaurantToUpdate = 
    new restaurant(req.body._id, req.body.name, req.body.location, req.body.website, req.body.contact);
     repo.updateRestaurant(restaurantToUpdate, ()=>{
          console.log("Data Updated");
     repo.getByID(restaurantToUpdate.id, (Restaurant) => {
            res.send(Restaurant);
        })
    })
}

exports.deleteRestaurant = (req, res) => {
    const id = req.params.id;
    repo.deleteRestaurant(id, ()=>{
        res.send("Restaurant Deleted");
    })
}

exports.filterRestaurant = (req, res) => {
    const params = url.parse(req.url, true).query;
    console.log(params);
    if(!params.name){
        repo.getByLocation(params.location, (Restaurant)=>{
            res.send(Restaurant);
        });
    }
    repo.filterRestaurant(params.location, params.name, (result)=>{
        res.send(result);
    });
}