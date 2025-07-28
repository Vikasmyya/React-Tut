import RestaurentCard, { WithLabelPromoted } from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_URL } from "../Utils/constants";
import useOnlineStatus from "../Utils/useOnlineStatus";

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

  const RestauantPramoted = WithLabelPromoted(RestaurentCard);
  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false) {
    return <h1>Please check the internet connection</h1>;
  }

  //Conditional rendering
  return listofRes.length === 0 ? (
    <Shimmmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search">
          <input
            type="text"
            className="border border-solid border-black ml-4"
            value={searchText}
            onChange={(e) => {
              stSearchText(e.target.value);
            }}
          ></input>
          <button
            className="bg-green-100 px-4 py-2 m-4"
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
        <div>
          <button
            className="bg-gray-100 px-4 py-2 m-4"
            onClick={() => {
              const resListofRes = listofRes.filter(
                (restuarent) => restuarent.info.avgRating > 4.4
              );
              setfilteredListofRes(resListofRes);
            }}
          >
            Top rated restuarent
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredListofRes.map((restuarent) => (
          <Link
            key={restuarent.info.id}
            to={"/restaurent/" + restuarent.info.id}
          >
            {restuarent.info.id % 2 == 0 ? (
              <RestauantPramoted resData={restuarent} />
            ) : (
              <RestaurentCard resData={restuarent} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
