import "./App.css";

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
      <li>{users.map((user) => `Hey ${user.firstName} ${user.lastName}`)}</li>
    );
  }
  return (
    <div>
      {elem}
      <ul>{test(users)}</ul>
    </div>
  );
}

export default App;
