import React, { useState } from "react";
import "./App.scss";
import Detailes from "./Pages/Detailes/Detailes";
import List from "./Pages/List/List";

// встановлюємо дефолтне значення для пропса у Detailes
import data from "./data";
const defaultItem = data[0].items[1];

function App() {
  const [dataItem, setDataItem] = useState(defaultItem);
  // console.log(dataItem);

  return (
    <div>
      <List dataItem={dataItem} setDataItem={setDataItem} />
      <Detailes item={dataItem} />
    </div>
  );
}

export default App;
