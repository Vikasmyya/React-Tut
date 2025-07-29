import ItemList from "./ItemList";

const RestaurantCatogory = ({ data, showItems, setshowIndex }) => {
  const handleClick = () => {
    setshowIndex();
  };
  return (
    <div className="w-6/12 bg-gray-100 shadow-lg m-auto my-2 p-4 ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <h1 className="font-bold">
          {data.title} ({data.itemCards.length})
        </h1>
      </div>
      {showItems && <ItemList data={data} />}
    </div>
  );
};

export default RestaurantCatogory;
