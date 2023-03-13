import React from "react";
import "./About.scss";

const About = (props) => {
  return (
    <div className="about">
      <span className="about__text">
        Всього <span className="about__text-result">{props.todos.length}</span>
      </span>
      <span className="about__text">
        Виконано{" "}
        <span className="about__text-result">
          {props.checkedTask < 0
            ? 0 + " з " + props.todos.length
            : props.checkedTask + " з " + props.todos.length}
        </span>
      </span>
    </div>
  );
};

export default About;
