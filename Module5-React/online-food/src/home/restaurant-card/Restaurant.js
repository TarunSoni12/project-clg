
import "./Restaurant.css";

function RestaurantCard(props) {

    const restaurant = props.item;

    return (
        <div className="card">
           <div className="row">
               <div className="col-md-3">
                    <img className="rounded" src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80"></img>     
                </div>
               <div className="col-md-9">
                   <p>{restaurant.name}</p>
                   <p>Location : {restaurant.location}</p>
                   <p>{restaurant.website}</p>
               </div>
           </div>
        </div>
    )
}

export default RestaurantCard;