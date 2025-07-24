import RestaurentCard from "./RestaurentCard";
import resList from "../Utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restuarent) => (
          <RestaurentCard key={restuarent.info.id} resData={restuarent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
