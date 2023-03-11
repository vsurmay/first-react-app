import React from "react";
import "./Description.scss";

const Description = (props) => {
  return (
    <div className="description">
      <img className="description__img" src={props.imgUrl} alt="description" />
      <h4 className="description__title">{props.title}</h4>
      <p className="description__subtitle">{props.subTitle}</p>
    </div>
  );
};

export default Description;
