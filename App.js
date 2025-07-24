import React from "react";
import ReactDOM from "react-dom/client";

const Headder = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4BdwR2X16RrHC8QyJ5NXEZh83oY65HMqjBg&s"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contatct Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const inlinneStyle = {
  backgroundColor: "#f0f0f0",
};

const RestaurentCard = () => {
  return (
    <div className="res-card" style={inlinneStyle}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/0feef1d4-2a66-43a9-8fef-825997de330a_18974.jpg"
      ></img>
      <h3>Meghana foods</h3>
      <h4>Biriyani, North indian</h4>
      <h4>4.4</h4>
      <h4>40 min</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Headder />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
