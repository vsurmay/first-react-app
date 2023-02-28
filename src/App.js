import "./App.css";

function App() {
  const name = "Vitalik!";
  const elem = <h1>Hey! {name}</h1>;
  const user = {
    firstName: "Vitalik",
    lastName: "Surmay",
  };

  function test(user) {
    return <h2>{`Hi ${user.firstName} ${user.lastName}`}</h2>;
  }
  return (
    <div>
      {elem}
      {test(user)}
    </div>
  );
}

export default App;
