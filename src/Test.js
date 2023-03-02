import "./Test.css";

const Test = (props) => {
  const data = "Test";

  console.log(props);
  return <div className="test">{data}</div>;
};

export default Test;
