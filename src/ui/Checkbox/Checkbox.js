import React from "react";

const Checkbox = (props) => {
  console.log(props.complete);
  return <div>{props.complete ? <span>yes</span> : <span>no</span>}</div>;
};

export default Checkbox;
