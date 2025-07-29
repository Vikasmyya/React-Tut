import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const { loggedinUser } = useContext(UserContext);

  const cartItems = useSelector((store) => {
    console.log(store.cart.items);
    return store.cart.items;
  });

  return (
    <div className="flex justify-between bg-green-300 m-2 shadow-lg">
      <div className="logo-container">
        <img className="w-35" src={LOGO_URL}></img>
      </div>
      <div className="flex justify-center-safe">
        <ul className="flex items-center mr-5">
          <li className="px-5">
            Online Status:{" "}
            {onlineStatus ? (
              <span
                style={{
                  backgroundColor: "green",
                  display: "inline-block",
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                }}
              />
            ) : (
              <span
                style={{
                  backgroundColor: "red",
                  display: "inline-block",
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                }}
              />
            )}
          </li>
          <li className="px-5">
            <Link to="/">Home</Link>
          </li>
          <li className="px-5">
            <Link to="/about">About</Link>
          </li>
          <li className="px-5">
            <Link to="/contact">Contatct Us</Link>
          </li>
          <Link to="/cart">
            <li className="px-5">Cart - ({cartItems.length} items)</li>
          </Link>

          <li className="px-4 font-bold">{loggedinUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
