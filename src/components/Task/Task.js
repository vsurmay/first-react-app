import React, { useState } from "react";
import Checkbox from "../../ui/Checkbox/Checkbox";
import "./Task.scss";

const Task = (props) => {
  const [complete, setComplete] = useState(false);
  return (
    <li className="task">
      {/* <Checkbox complete={complete} setComplete={setComplete} /> */}
      <p className="task__text">{props.text}</p>
    </li>
  );
};

export default Task;
