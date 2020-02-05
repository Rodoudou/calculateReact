import React from "react";
import image from "../img/calculate.png";
const Header = () => {
  return (
    <div className="header">
      <div className="nav" style={{ backgroundColor: "white" }}>
        <img
          src={image}
          style={{ marginRight: 5, fontsize: 48, lineheight: 59 }}
          alt="calculate"
        />
        React Counter
      </div>
    </div>
  );
};

export default Header;
