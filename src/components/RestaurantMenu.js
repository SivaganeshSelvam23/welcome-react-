import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resID } = useParams();
  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    const data = await fetch(`${MENU_URL}${resID}`);

    const json = await data.json();

    setResInfo(json?.data);
  };

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    avgRating,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
    areaName,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log("dasd", resInfo);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <div className="res-infocontainer">
        <h3>
          ⭐{avgRating} {`(${totalRatingsString})`} . {costForTwoMessage}
        </h3>
        <h4 style={{ color: "orange" }}>{cuisines.join(", ")}</h4>
        <h4>Outlet: {areaName}</h4>
      </div>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((menu) => (
          <div key={menu?.card?.info?.id}>
            <li>{menu?.card?.info?.name}</li>
            <p>
              Rs.
              {(menu?.card?.info?.defaultPrice || menu?.card?.info?.price) /
                100}
            </p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
