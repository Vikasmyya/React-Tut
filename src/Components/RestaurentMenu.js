import Shimmmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCatogory from "./RestaurantCatogory";
import { useState } from "react";

const RestaurentMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();

  const restaurentMenu = useRestaurantMenu(resId);

  if (restaurentMenu === null) {
    return <Shimmmer />;
  }

  const { name, cuisines, avgRatingString, costForTwoMessage } =
    restaurentMenu?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restaurentMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;

  const catagories =
    restaurentMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="p-5 text-center">
      <h1 className="font-bold my-2 text-xl">{name}</h1>
      <p>CUISINES: {cuisines.join(", ")}</p>
      <h3>RATINGS: {avgRatingString}</h3>
      <h4>COST FOR TWO: {costForTwoMessage}</h4>
      <div>
        {catagories.map((cat, index) => {
          return (
            <RestaurantCatogory
              key={cat.card.card.categoryId}
              data={cat.card.card}
              showItems={index === showIndex ? true : false}
              setshowIndex={() => setShowIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurentMenu;
