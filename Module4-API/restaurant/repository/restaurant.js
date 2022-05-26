
const { ObjectId } = require("mongodb");
const mongodb = require("../../config/mongodb");
const restaurant = require("../models/restaurant");

exports.add = (item, callback)=>{
    // step 2: get the collection
    const collection = mongodb.getcollection("restaurant");

    // step 3: add your data collection 
    collection.insertOne({name:item.name, location:item.location, 
        website:item.website, contact:item.contact})
           .then(()=>{
               callback();
           })     
           .catch(err=>{console.log(err)});    
}

exports.getAll = (callback) => {
    const collection = mongodb.getcollection("restaurant");
    collection.find().toArray().then(
        (restaurants)=>{
            callback(restaurants);
        },
        err=>{console.log(err);}
    )
}

exports.getByID = (id, callback) => {
      console.log(id);
    const collection = mongodb.getcollection("restaurant");
    collection.findOne({_id:ObjectId(id)}).then(
        (Restaurant)=>{
            callback(Restaurant);
        },
        err=>{console.log(err);}
    )
}

exports.getByLocation = (location, callback) => {
   // console.log(location);
  const collection = mongodb.getcollection("restaurant");
  collection.find({location:location}).toArray().then(
      (Restaurant)=>{
          callback(Restaurant);
      },
      err=>{console.log(err);}
  )
}

exports.searchString = (search, callback) => {
   const collection = mongodb.getcollection("restaurant");
   collection.find({name: {$regex:search}}).toArray().then(
       (Restaurant)=>{
           callback(Restaurant);
       },
       err=>{console.log(err);}
   )
 }

exports.updateRestaurant = (Restaurant, callback) => {
    const collection = mongodb.getcollection("restaurant");
    const filter = {_id:ObjectId(Restaurant.id)};
    const update = {$set :{name: Restaurant.name, location: Restaurant.location, website: Restaurant.website, contact: Restaurant.contact}};
    collection.findOneAndUpdate(filter, update).then(
        ()=>{
            callback();
        },
        err=>{console.log(err);}
    )
}

exports.deleteRestaurant = (id, callback) => {
    const collection = mongodb.getcollection("restaurant");
    collection.findOneAndDelete({_id:ObjectId(id)})
    .then(
        ()=>{
          callback();
    },
         err=>{console.log(err);}
    )
} 

exports.filterRestaurant = (city, name, callback) => {
    const collection = mongodb.getcollection("restaurant");
    collection.find({$and: [
        {name: {$regex:name}},
       {location: city}
    ]}).toArray().then(
        (Restaurant)=>{
            callback(Restaurant);
        },
        err=>{console.log(err);}
    )
}