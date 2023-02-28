import "./App.css";
import "./Test.js";
import Test from "./Test";

function App() {
  const name = "Vitalik!";
  const elem = <h1>Hey! {name}</h1>;
  const users = [
    {
      firstName: "Oleg",
      lastName: "Mant",
    },
    {
      firstName: "Lofjd",
      lastName: "Idja",
    },
    {
      firstName: "Pofsd",
      lastName: "Aqdhfdsf",
    },
    {
      firstName: "Afjlsdj",
      lastName: "Hfsdd",
    },
    {
      firstName: "Vitalik",
      lastName: "Surmay",
    },
    {
      firstName: "Vitalik",
      lastName: "Surmay",
    },
  ];

  function test(users) {
    return (
      <ul>
        {users.map((user) => (
          <li>{`Hey ${user.firstName} ${user.lastName}`}</li>
        ))}
      </ul>
    );
  }
  return (
    <div>
      {elem}
      {test(users)}
      <Test />
    </div>
  );
}

export default App;
