import Header from "../header/Header";
import {useEffect, useState} from "react";
import "../home/home.css"
import RestaurantCard from "../restaurant-card/Restaurant";

function Home() {

    var [restaurants, setRestaurants]= useState([]);
    var [location, setLocation]= useState([]);

     useEffect(()=>{
        fetch("http://localhost:3100/api/restaurant")
        .then(res=> res.json())
        .then(
            (result)=>{
                result = result.filter(r=> r.name);
                setRestaurants(result);
                console.log(result);
            }
        );
    }, []);


    function filterRestaurant (event){ 
          const location = event.target.value;
          setLocation(location);      
          filter(location);
    }

    function filterRestaurantWithName (event){ 
        const name = event.target.value;      
        filter(location, name);
  }

  function filter(location, name){
            var url = "http://localhost:3100/api/restaurant/Filter?location="+location;

      if(name){
           url = "http://localhost:3100/api/restaurant/Filter?name="+name+"&location="+location;
      }

    fetch(url)
    .then(res=> res.json())
    .then(
        (result)=>{
            result = result.filter(r=> r.name);
            setRestaurants(result);
       }
    ); 
  }

       return (
           <div>
               <Header change={(event)=>filterRestaurant(event)} nameInput={(event)=>filterRestaurantWithName(event)} />
              <div className="row">
                  <div className="col-md-3 filter"></div>
                  <div className="col-md-9 result-container">
                      {/* This is possible because of JSX */}
                     {
                         restaurants.length>0 &&
                         restaurants.map(r=>
                            <RestaurantCard item={r} />
                            )
                     }
                      
                      </div>
              </div>
               </div>
       )
}

export default Home;