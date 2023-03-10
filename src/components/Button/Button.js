import React from "react";
import "./Button.scss";
import sampleBoard from "../../sampleBoard";
import checkWinner from "../../checkWinner";

const Button = (props) => {
  function handleClick(event) {
    event.target.textContent = props.valueButton ? "X" : "O";
    props.setMove(event.target.textContent === "X" ? "O" : "X");
    props.setValueButton(!props.valueButton);
    if (props.index < 3) {
      const valueInArr = sampleBoard[0].indexOf(props.index);
      sampleBoard[0][valueInArr] = event.target.textContent;
    } else if (props.index < 6) {
      const valueInArr = sampleBoard[1].indexOf(props.index);
      sampleBoard[1][valueInArr] = event.target.textContent;
    } else {
      const valueInArr = sampleBoard[2].indexOf(props.index);
      sampleBoard[2][valueInArr] = event.target.textContent;
    }
    props.setResult(checkWinner(sampleBoard));
    props.setCountMovie(props.countMovie + 1);
  }

  return (
    <button onClick={handleClick} className="button">
      -
    </button>
  );
};

export default Button;
