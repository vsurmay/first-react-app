import "./App.scss";
import "./LifeCicle.js";
import Test from "./LifeCicle";
import React from "react";
import Test1 from "./Components/Test/Test1";
import Test2 from "./Components/Test2/Test2";

function App() {
  return (
    <div>
      Hey!
      <Test />
      <Test1 text="props" />
      <Test2 text="hey" />
    </div>
  );
}

export default App;
