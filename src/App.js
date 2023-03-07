import "./App.scss";
import ItemAttack from "./Components/ItemAttack/ItemAttack";
import ItemDeffence from "./Components/ItemDeffence/ItemDeffence";
import damage from "./damage";
import { useState } from "react";

function App() {
  const [attackPokemon, setAttackPokemon] = useState("fire");
  const [deffensePokemon, setDeffensePokemon] = useState("fire");
  const [attackPower, setAttackPower] = useState(1);
  const [deffencePower, setDeffencePower] = useState(1);

  const valueDamage = damage(
    attackPokemon,
    deffensePokemon,
    attackPower,
    deffencePower
  );

  return (
    <div className="container">
      <div className="pokemon">
        <ItemAttack
          setAttackPokemon={setAttackPokemon}
          attackPokemon={attackPokemon}
          setAttackPower={setAttackPower}
          attackPower={attackPower}
        />
        <ItemDeffence
          setDeffensePokemon={setDeffensePokemon}
          setDeffencePower={setDeffencePower}
          deffensePokemon={deffensePokemon}
          deffencePower={deffencePower}
        />
      </div>
      <div className="pokemon__damage">
        Value damage:{Math.floor(valueDamage)}
      </div>
    </div>
  );
}

export default App;
