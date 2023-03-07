import "./App.scss";
import React, { useState } from "react";
import Detailes from "./Pages/Detailes/Detailes";
import List from "./Pages/List/List";
import data from "./data";

function App() {
  const defaultItem = data[0].items[1];

  const [dataItem, setDataItem] = useState(defaultItem);

  // create new array which consist only dish item
  const newData = [];
  const dataItemsArray = data.map((el) =>
    el.items.forEach((el) => newData.push(el))
  );

  return (
    <div>
      <List data={newData} setDataItem={setDataItem} />
      <Detailes item={dataItem} />
    </div>
  );
}

export default App;
