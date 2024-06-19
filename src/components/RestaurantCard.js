import { RESLOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, avgRating, deliveryTime, cuisines, id } =
    resData;

  return (
    <Link to={`/restaurant/${id}`} className="res-card">
      <img
        className="res-logo"
        alt="ResLogo"
        src={RESLOGO_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{deliveryTime} minutes</h4>
    </Link>
  );
};
export default RestaurantCard;
