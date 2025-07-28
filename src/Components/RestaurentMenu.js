import Shimmmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurentMenu = () => {
  //const [restaurentMenu, setrestaurentMenu] = useState(null);

  const { resId } = useParams();

  const restaurentMenu = useRestaurantMenu(resId);
  console.log(restaurentMenu);

  if (restaurentMenu === null) {
    return <Shimmmer />;
  }

  const { name, cuisines, avgRatingString, costForTwoMessage } =
    restaurentMenu?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restaurentMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;

  return (
    <div className="p-10">
      <h1 className="font-bold my-5 text-xl">{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <h3>{avgRatingString}</h3>
      <h4>{costForTwoMessage}</h4>
      <div className="menu-list">
        <h2 className="font-bold text-lg mt-2">Menu</h2>
        <ul>
          {itemCards.map((menu) => {
            return (
              <li className="list-disc mx-10" key={menu?.card?.info?.id}>
                {menu?.card?.info?.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurentMenu;
