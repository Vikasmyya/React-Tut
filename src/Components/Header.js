import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contatct Us</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
