import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Detailes from "./Pages/Detailes/Detailes";
import List from "./Pages/List/List";
import Page from "./Pages/Page/Page";

function App() {
  return (
    <div>
      <Header />
      <Page />
      {/* <List /> */}
      {/* <Detailes /> */}
    </div>
  );
}

export default App;
