import "./ItemDeffence.scss";
import { pokemons } from "../../data-pokemon";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

const ItemDeffence = (props) => {
  return (
    <div className="pokemon__item">
      <ul className="list">
        {pokemons.map((el, index) => (
          <li key={index} className="list__item">
            <Button onClick={() => props.setDeffensePokemon(el)}>{el}</Button>
          </li>
        ))}
      </ul>
      <Input setPower={props.setDeffencePower} />
    </div>
  );
};

export default ItemDeffence;
