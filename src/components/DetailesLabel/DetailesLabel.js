import "./DetailesLabel.scss";

function DetailesLabel(props) {
  return (
    <label className="detailes__label">
      <span className="detailes__label-text">{props.text}</span>
      <input className="detailes__label-input" type="checkbox" />
    </label>
  );
}

export default DetailesLabel;
