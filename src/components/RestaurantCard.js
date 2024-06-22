import { RESLOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, avgRating, deliveryTime, cuisines, id } =
    resData;
  return (
    <Link
      to={`/restaurant/${id}`}
      className="p-4 m-4 w-[250px] hover:border border-solid border-black rounded-lg bg-gray-100"
    >
      <img
        className="w-[250px] h-[200px] mb-4 rounded-lg"
        alt="ResLogo"
        src={RESLOGO_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-[20px] py-3">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{deliveryTime} minutes</h4>
    </Link>
  );
};
export default RestaurantCard;
