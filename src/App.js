import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import renderPage from "./renderPage";

function App() {
  const [curentPage, setCurentPage] = useState("Home");

  return (
    <>
      <Header setCurentPage={setCurentPage} />
      {renderPage(curentPage)}
    </>
  );
}

export default App;
