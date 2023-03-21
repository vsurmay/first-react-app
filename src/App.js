import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import renderPage from "./renderPage";
import ContextCurrentPage from "./ContextCurrentPage";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <>
      <ContextCurrentPage.Provider
        value={{ currentPage: currentPage, setCurrentPage: setCurrentPage }}
      >
        <Header setCurentPage={setCurrentPage} />
        {renderPage(currentPage)}
      </ContextCurrentPage.Provider>
    </>
  );
}

export default App;
