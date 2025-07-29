import { CDN_URL } from "../Utils/constants";

const ItemList = (props) => {
  return (
    <div>
      {props.data.itemCards.map((item) => {
        const price =
          item.card.info.price != null
            ? item.card.info.price / 100
            : item.card.info.defaultPrice / 100;

        return (
          <div
            className="flex justify-between items-start border-b p-4"
            key={item.card.info.id}
          >
            <div className="text-left pr-4 max-w-[70%] space-y-2">
              <div className="font-bold">{item.card.info.name}</div>
              <div>₹{price}</div>
              <div className="text-sm">{item.card.info.description}</div>
            </div>
            <div className="flex flex-col items-end w-24">
              <img
                className="w-full h-auto rounded"
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
              />
              <button className="p-1 px-2 bg-white border rounded shadow text-xs">
                Add+
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
