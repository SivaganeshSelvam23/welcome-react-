import { RESLOGO_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, avgRating, deliveryTime, cuisines } =
    resData;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="ResLogo"
        src={RESLOGO_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};
export default RestaurantCard;
