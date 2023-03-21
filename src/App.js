import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import renderPage from "./renderPage";
import ContextCurrentPage from "./ContextCurrentPage";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState({});

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await axios.get("http://localhost:3004/recipes");
    setData(response.data);
    setCurrentPage({ page: "Home", data: response.data });
  }

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
