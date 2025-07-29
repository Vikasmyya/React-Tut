import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  const items = useSelector((store) => {
    return store.cart.items;
  });

  const dispatch = useDispatch();

  const handleClear = () => {
    return dispatch(clearCart());
  };
  return (
    <div>
      <div className="font-bold text-center">Cart</div>
      <div className="text-center">
        <button
          className="m-auto bg-red-300 p-3 rounded-md"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>

      <div className="w-6/12 bg-gray-100 shadow-lg m-auto my-2 p-4">
        <ItemList data={items}></ItemList>
      </div>
    </div>
  );
};

export default Cart;
