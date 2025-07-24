import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmmer from "./Shimmer";

const Body = () => {
  const [listofRes, setlistofRes] = useState([]);
  const [filteredListofRes, setfilteredListofRes] = useState([]);
  const [searchText, stSearchText] = useState("");

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
    setfilteredListofRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Conditional rendering
  return listofRes.length === 0 ? (
    <Shimmmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              stSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const filteredRes = listofRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredListofRes(filteredRes);
            }}
          >
            search
          </button>
        </div>
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
        {filteredListofRes.map((restuarent) => (
          <RestaurentCard key={restuarent.info.id} resData={restuarent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
