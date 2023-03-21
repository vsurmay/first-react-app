import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import renderPage from "./renderPage";
import ContextCurrentPage from "./ContextCurrentPage";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/recipes")
      .then((response) => setData(response.data));
  }, []);

  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <>
      <ContextCurrentPage.Provider
        value={{
          currentPage: currentPage,
          setCurrentPage: setCurrentPage,
          data: data,
        }}
      >
        <Header setCurentPage={setCurrentPage} />
        {renderPage(currentPage, data)}
      </ContextCurrentPage.Provider>
    </>
  );
}

export default App;
