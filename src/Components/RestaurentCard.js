import { CDN_URL } from "../Utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="m-4 p-4 w-[250px] h-[400px] flex flex-col justify-between bg-gray-50 hover:bg-gray-300 rounded shadow">
      <div>
        <img
          className="w-full h-40 object-cover rounded"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
      </div>
      <h4 className="mt-4">{deliveryTime} minutes</h4>
    </div>
  );
};

export const WithLabelPromoted = (RestaurentCard) => {
  return (props) => {
    return (
      <div className="relative">
        <h1 className="absolute top-2 left-2 bg-yellow-300 px-2 py-1 text-xs font-bold rounded">
          Promoted
        </h1>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

export default RestaurentCard;
