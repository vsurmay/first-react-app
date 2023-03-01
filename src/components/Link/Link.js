import "./Link.css";

function Link(props) {
  return (
    <a className="link" href="#">
      {props.text}
    </a>
  );
}

export default Link;
