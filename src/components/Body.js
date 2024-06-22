import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { RESLIST_URL } from "../utils/constants";
import useOnlineStatus from "../Hooks/useOnlineStatus";
import Shimmer from "./Shimmer";
const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchRestaurant();
  }, []);
  console.log("filteredRestaurant:", filteredRestaurant);

  const fetchRestaurant = async () => {
    const data = await fetch(RESLIST_URL);

    const jsonData = await data.json();

    setResList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  if (onlineStatus === false) {
    return (
      <div
        style={{
          display: "flex",
          backgroundColor: "#f0f0f0",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div>
          <h1>Oops...❌</h1>
          <h3>Your Internet Connect Got Broken.</h3>
        </div>
      </div>
    );
  }

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex m-4 p-4">
        <div className="mx-5">
          <input
            type="text"
            className="p-2 border border-solid border-black rounded-md text-sm"
            placeholder="Search Restaurant..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 mx-3 bg-green-400 rounded-md font-normal"
            onClick={() => {
              let filtredRes = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtredRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="border border-black flex px-2 rounded-md">
          <button
            className=""
            onClick={() => {
              let filteredRes = filteredRestaurant.filter(
                (res) => res.info.avgRating >= 4.5
              );
              setFilteredRestaurant(filteredRes);
            }}
          >
            Top Rated Restaurant⭐
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};
export default Body;
