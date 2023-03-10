import React, { useState } from "react";
import Button from "../Button/Button";
import "./Board.scss";

const Board = (props) => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const [valueButton, setValueButton] = useState(true);

  return (
    <div className="board">
      {arr.map((element, index) => (
        <Button
          setMove={props.setMove}
          countMovie={props.countMovie}
          setCountMovie={props.setCountMovie}
          setResult={props.setResult}
          valueButton={valueButton}
          setValueButton={setValueButton}
          key={index}
          index={element}
        />
      ))}
    </div>
  );
};

export default Board;
