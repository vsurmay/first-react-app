import "./App.scss";
import ItemAttack from "./Components/ItemAttack/ItemAttack";
import ItemDeffence from "./Components/ItemDeffence/ItemDeffence";
import damage from "./damage";
import { useState } from "react";
import Button from "./UI/Button/Button";

function App() {
  const [attackPokemon, setAttackPokemon] = useState("fire");
  const [deffensePokemon, setDeffensePokemon] = useState("fire");
  const [attackPower, setAttackPower] = useState(1);
  const [deffencePower, setDeffencePower] = useState(1);

  const [valueDamage, setValueDamage] = useState("Plese, choose options");

  return (
    <div className="container">
      <div className="pokemon">
        <ItemAttack
          setAttackPokemon={setAttackPokemon}
          setAttackPower={setAttackPower}
          attackPower={attackPower}
        />
        <ItemDeffence
          setDeffensePokemon={setDeffensePokemon}
          setDeffencePower={setDeffencePower}
          deffencePower={deffencePower}
        />
      </div>
      <div className="pokemon__damage">
        <span>
          Value damage:{" "}
          {valueDamage
            ? Math.floor(valueDamage) || valueDamage
            : " Give corect data, please"}
        </span>
        <Button
          play
          onClick={() =>
            setValueDamage(
              damage(attackPokemon, deffensePokemon, attackPower, deffencePower)
            )
          }
        >
          Play
        </Button>
      </div>
    </div>
  );
}

export default App;
