import "./Input.scss";

const Input = (props) => {
  return (
    <input
      onChange={(e) => props.setPower(e.target.value)}
      className="input"
      type="text"
      placeholder="Only number"
    />
  );
};

export default Input;
