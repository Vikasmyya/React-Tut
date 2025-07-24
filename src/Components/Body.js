import RestaurentCard from "./RestaurentCard";
import resList from "../Utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listofRes, setlistofRes] = useState(resList);

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
