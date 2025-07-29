import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCatogory = (props) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="w-6/12 bg-gray-100 shadow-lg m-auto my-2 p-4 ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <h1 className="font-bold">
          {props.data.title} ({props.data.itemCards.length})
        </h1>
      </div>
      {showItems && <ItemList data={props.data} />}
    </div>
  );
};

export default RestaurantCatogory;
