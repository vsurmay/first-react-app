import React from "react";
import "./Logo.scss";

const Logo = (props) => {
  return (
    <div className="logo">
      <a href="#" className="logo__link">
        <img src={props.url} alt={props.alt} />
      </a>
    </div>
  );
};

export default Logo;
