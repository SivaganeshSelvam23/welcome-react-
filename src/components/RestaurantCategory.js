import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, show, changeIndex }) => {
  const { title, itemCards } = data;

  return (
    <div className="my-6">
      <div
        className="flex justify-between items-center py-3 cursor-pointer"
        onClick={() => {
          changeIndex();
        }}
      >
        <div className="flex">
          <h1 className="mr-2">{title}</h1>
          <h1>({itemCards.length})</h1>
        </div>
        <div>📂</div>
      </div>
      {show && (
        <div>
          <ItemList items={itemCards} />
        </div>
      )}
    </div>
  );
};
export default RestaurantCategory;
