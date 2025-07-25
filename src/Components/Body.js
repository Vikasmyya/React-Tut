import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_URL } from "../Utils/constants";

const Body = () => {
  const [listofRes, setlistofRes] = useState([]);
  const [filteredListofRes, setfilteredListofRes] = useState([]);
  const [searchText, stSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_URL);

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
          <Link
            key={restuarent.info.id}
            to={"/restaurent/" + restuarent.info.id}
          >
            <RestaurentCard resData={restuarent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
