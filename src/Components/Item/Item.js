import "./Item.scss";
import { pokemons } from "../../data-pokemon";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import React, { useState } from "react";

const ItemAttack = (props) => {
  const [activeButtons, setActiveButtons] = useState(0);

  return (
    <div className="pokemon__item">
      <ul className="list">
        <span className="list__text">Type: </span>
        {pokemons.map((el, index) => (
          <li key={index} className="list__item">
            <Button
              className={activeButtons === index ? "active" : ""}
              onClick={() => {
                props.setPokemon(el);
                setActiveButtons(index);
              }}
            >
              {el}
            </Button>
          </li>
        ))}
      </ul>
      <Input attack power={props.power} setPower={props.setPower} />
    </div>
  );
};

export default ItemAttack;
