import "./App.scss";

function App() {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="container">
      <h1 className="game__title">Crosses Zeros</h1>
      <div className="game">
        <div className="game__item"></div>
        <div className="game__item"></div>
        <div className="game__item"></div>
        <div className="game__item"></div>
        <div className="game__item"></div>
        <div className="game__item"></div>
        <div className="game__item"></div>
        <div className="game__item"></div>
        <div className="game__item"></div>
      </div>
    </div>
  );
}

export default App;
