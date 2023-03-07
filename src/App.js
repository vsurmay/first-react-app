import "./App.css";
import ItemAttack from "./Components/ItemAttack/ItemAttack";
import damage from "./damage";
import Button from "./UI/Button/Button";
import Input from "./UI/Input/Input";

function App() {
  return (
    <div className="container">
      <div className="pokemon">
        <ItemAttack />
      </div>
    </div>
  );
}

export default App;
