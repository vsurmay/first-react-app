import "./ItemAttack.scss";
import { pokemons } from "../../data-pokemon";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

const ItemAttack = (props) => {
  return (
    <div className="pokemon__item">
      <p>
        Your choose: <span>{props.attackPokemon}</span>
      </p>
      <ul className="list">
        {pokemons.map((el, index) => (
          <li key={index} className="list__item">
            <Button onClick={() => props.setAttackPokemon(el)}>{el}</Button>
          </li>
        ))}
      </ul>
      <Input attack power={props.attackPower} setPower={props.setAttackPower} />
    </div>
  );
};

export default ItemAttack;
