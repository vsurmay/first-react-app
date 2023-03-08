import "./Input.scss";

const Input = (props) => {
  return (
    <label>
      <span className="input__text">
        {props.attack ? "Attack power" : "Deffence power"}
      </span>
      <input
        onChange={(e) =>
          e.target.value < 0
            ? props.setPower("0")
            : props.setPower(e.target.value)
        }
        value={props.power}
        className="input"
        type="number"
        placeholder="Only number"
      />
    </label>
  );
};

export default Input;
