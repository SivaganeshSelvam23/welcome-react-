import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux-toolkit/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const addItemHandler = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="my-8 pb-10 flex justify-between border-b-2 items-center"
        >
          <div className="w-8/12">
            <h1 className="text-md font-semibold mb-2">
              {item?.card?.info?.name}
            </h1>
            <h1 className="text-md font-semibold mb-2">
              ₹{item?.card?.info?.price / 100}
            </h1>
            <span className="text-sm font-medium text-gray-400 mb-2">
              ⭐{item?.card?.info?.ratings?.aggregatedRating?.rating} (
              {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
            </span>
            <p className="text-sm font-medium text-gray-400 mb-2">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="relative">
            <img
              className="w-[170px] h-[144px] rounded-lg"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item?.card?.info?.imageId}`}
            />
            <h1
              className="absolute top-[118px] left-[35px] text-green-600 text-lg shadow-lg font-bold bg-white border w-[100px] flex justify-center rounded-lg p-2 cursor-pointer hover:bg-gray-300"
              onClick={() => addItemHandler(item)}
            >
              ADD
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
