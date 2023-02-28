import "./Title.css";

function Title(props) {
  return (
    <h2 className="title">
      {props.gender === "male" ? "Mrs " : "Ms "}
      {props.text}
    </h2>
  );
}

export default Title;
