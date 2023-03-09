import "../ItemAttack/ItemAttack.scss";
import { pokemons } from "../../data-pokemon";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import { useState } from "react";

const ItemDeffence = (props) => {
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div className="pokemon__item">
      <ul className="list">
        <span className="list__text">Type: </span>
        {pokemons.map((el, index) => (
          <li key={index} className="list__item">
            <Button
              className={activeButton === index ? "active" : ""}
              onClick={() => {
                props.setDeffensePokemon(el);
                setActiveButton(index);
              }}
            >
              {el}
            </Button>
          </li>
        ))}
      </ul>
      <Input
        deffence
        power={props.deffencePower}
        setPower={props.setDeffencePower}
      />
    </div>
  );
};

export default ItemDeffence;
