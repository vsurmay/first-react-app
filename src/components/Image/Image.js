import "./Image.scss";

function Image(props) {
  return <img className="image" src={props.url} alt={props.alt} />;
}

export default Image;
