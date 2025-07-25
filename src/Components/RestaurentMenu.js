import { useEffect, useState } from "react";
import Shimmmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../Utils/constants";

const RestaurentMenu = () => {
  const [restaurentMenu, setrestaurentMenu] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    setrestaurentMenu(json);
  };

  if (restaurentMenu === null) {
    return <Shimmmer />;
  }

  const { name, cuisines, avgRatingString, costForTwoMessage } =
    restaurentMenu?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restaurentMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;

  return (
    <div>
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <h3>{avgRatingString}</h3>
      <h4>{costForTwoMessage}</h4>
      <div className="menu-list">
        <h2>Menu</h2>
        <ul>
          {itemCards.map((menu) => {
            return <li key={menu?.card?.info?.id}>{menu?.card?.info?.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurentMenu;
