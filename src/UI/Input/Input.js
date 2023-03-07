import "./Input.scss";

const Input = (props) => {
  console.log(props.power);
  return (
    <input
      onChange={(e) =>
        e.target.value < 1 ? props.setPower(1) : props.setPower(e.target.value)
      }
      value={props.power}
      className="input"
      type="number"
      placeholder="Only number"
    />
  );
};

export default Input;
