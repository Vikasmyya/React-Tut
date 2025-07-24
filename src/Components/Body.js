import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmmer from "./Shimmer";

const Body = () => {
  const [listofRes, setlistofRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0488712&lng=77.5741212&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setlistofRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listofRes.length === 0) {
    return <Shimmmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const resListofRes = listofRes.filter(
              (restuarent) => restuarent.info.avgRating > 4.2
            );
            setlistofRes(resListofRes);
          }}
        >
          Top rated restuarent
        </button>
      </div>
      <div className="res-container">
        {listofRes.map((restuarent) => (
          <RestaurentCard key={restuarent.info.id} resData={restuarent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
