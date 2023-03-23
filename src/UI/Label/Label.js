import "./Label.scss";

function Label(props) {
  console.log(props.errors);
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
        name={props.name}
        className={
          props.detailes ? "detailes__label-input" : "modal__label-input"
        }
        type={props.type}
      />
      {props.errors ? (
        <span className="modal__label-err">{props.errors}</span>
      ) : null}
    </label>
  );
}

export default Label;
