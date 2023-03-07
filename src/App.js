import "./App.scss";
import ItemAttack from "./Components/ItemAttack/ItemAttack";
import ItemDeffence from "./Components/ItemDeffence/ItemDeffence";
import damage from "./damage";
import { useState } from "react";

function App() {
  const [attackPokemon, setAttackPokemon] = useState("");
  const [deffensePokemon, setDeffensePokemon] = useState("");
  const [attackPower, setAttackPower] = useState("");
  const [deffencePower, setDeffencePower] = useState("");

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
          setAttackPower={setAttackPower}
          attackPower={attackPower}
        />
        <ItemDeffence
          setDeffensePokemon={setDeffensePokemon}
          setDeffencePower={setDeffencePower}
          deffencePower={deffencePower}
        />
      </div>
      <div>attackPokemon: {attackPokemon}</div>
      <div>deffensePokemon: {deffensePokemon}</div>
      <div>setAttackPower: {attackPower}</div>
      <div>deffencePower: {deffencePower}</div>
      <div>valueDamage: {valueDamage}</div>
    </div>
  );
}

export default App;
