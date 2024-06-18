import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
const Body = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.9087703&lng=79.8121644&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();

    setResList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-res">
        <button
          onClick={() => {
            let filteredRes = resList.filter((res) => res.info.avgRating > 4.1);
            console.log(filteredRes);
            setResList(filteredRes);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};
export default Body;
