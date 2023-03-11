import React, { useState } from "react";
import "./About.scss";

const About = (props) => {
  console.log(props.todos);

  return (
    <div className="about">
      <span className="about__text">
        Всього <span className="about__text-result">{props.todos.length}</span>
      </span>
      <span className="about__text">
        Виконано{" "}
        <span className="about__text-result">{" з " + props.todos.length}</span>
      </span>
    </div>
  );
};

export default About;
