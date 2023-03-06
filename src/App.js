import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Detailes from "./pages/Detailes/Detailes";
import List from "./pages/List/List";
import Page from "./pages/Page/Page";

function App() {
  return (
    <div>
      <Header />
      {/* <Page /> */}
      {/* <List /> */}
      <Detailes />
    </div>
  );
}

export default App;
