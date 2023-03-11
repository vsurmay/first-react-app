import React from "react";
import "./About.scss";

const About = (props) => {
  return (
    <div className="about">
      <span className="about__text">
        Всього <span className="about__text-result">0</span>
      </span>
      <span className="about__text">
        Виконано <span className="about__text-result">0</span>
      </span>
    </div>
  );
};

export default About;
