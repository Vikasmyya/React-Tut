import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
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
          <li className="px-5">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
