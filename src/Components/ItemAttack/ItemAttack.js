import "./ItemAttack.scss";
import { pokemons } from "../../data-pokemon";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

const ItemAttack = (props) => {
  console.log(pokemons);
  return (
    <div className="pokemon__item">
      <ul className="list">
        {pokemons.map((el, index) => (
          <li key={index} className="list__item">
            <Button name={el} />
          </li>
        ))}
      </ul>
      <Input />
    </div>
  );
};

export default ItemAttack;
