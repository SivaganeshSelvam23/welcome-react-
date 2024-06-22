import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
  const { resID } = useParams();
  const resInfo = useRestaurantMenu(resID);
  console.log("showIndex:", showIndex);
  const handleCategoryClick = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
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

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="max-w-[800px] min-w-[800px] my-10 mx-auto">
      <h1 className="text-3xl font-medium mb-5">{name}</h1>
      <div className="border-2 border-solid rounded-xl p-5 shadow-xl ">
        <h3 className="text-lg font-medium mb-2">
          ⭐{avgRating} {`(${totalRatingsString})`} . {costForTwoMessage}
        </h3>
        <h4 className="mb-2 ml-6 text-orange-500 font-medium">
          {cuisines.join(", ")}
        </h4>
        <h4 className="ml-6 font-medium">Outlet: {areaName}</h4>
      </div>
      <div className="text-center my-10 text-xl font-semibold">
        <h2>🧾 MENU 🧾</h2>
      </div>
      <div className="category">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={index}
            data={category.card.card}
            show={index === showIndex}
            changeIndex={() => handleCategoryClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
