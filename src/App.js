import "./App.scss";
import Board from "./components/Board/Board";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");
  const [countMovie, setCountMovie] = useState(0);
  const [move, setMove] = useState("X");

  return (
    <div className="container">
      <div className="move">Хід: {move}</div>
      <Board
        setMove={setMove}
        setResult={setResult}
        setCountMovie={setCountMovie}
        countMovie={countMovie}
      />

      <div className="result">
        {countMovie === 9 ? "Нічия" : `Переможець: ${result ? result : ""}`}
      </div>
    </div>
  );
}

export default App;
