
// step 1: Import Express
const express = require("express");
const controller = require("../controlers/restaurant");

// step 2: create router 
const router = express.Router();

// step3: Configure route paths
router.get("/Filter", controller.filterRestaurant);
router.post("/", controller.addRestaurant);
router.get("/", controller.getAllRestaurants);
router.get("/location/:location", controller.getRestaurantByLocation);
router.get("/:id", controller.getRestaurantByID);
router.put("/", controller.updateRestaurant);
router.delete("/:id", controller.deleteRestaurant);
router.get("/search/:string", controller.searchRestaurant);


module.exports = router;