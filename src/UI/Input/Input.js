import "./Input.scss";

const Input = (props) => {
  console.log(props.attack);
  return (
    <label>
      <span className="input__text">
        {props.attack ? "Attack power" : "Deffence power"}
      </span>
      <input
        onChange={(e) =>
          e.target.value < 1
            ? props.setPower(1)
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
