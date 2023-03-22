import "./Label.scss";

function Label(props) {
  console.log(props.type);
  return (
    <label className={props.detailes ? "detailes__label" : "modal__label"}>
      <span
        className={
          props.detailes ? "detailes__label-text" : "modal__label-text"
        }
      >
        {props.text}
      </span>
      <input
        onChange={props.handleChange}
        name={props.text}
        className={
          props.detailes ? "detailes__label-input" : "detailes__label-input"
        }
        type={props.type}
      />
    </label>
  );
}

export default Label;
