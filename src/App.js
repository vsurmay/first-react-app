import "./App.scss";
import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import ContextCurrentPage from "./ContextCurrentPage";
import renderPage from "./renderPage";
import receptsReducer from "./reducers/receptsReducer";

function App() {
  const [currentPage, setCurrentPage] = useState({});
  const [recepts, dispatch] = useReducer(receptsReducer, []);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await axios.get("http://localhost:3004/recipes");
    setCurrentPage({ page: "Home", data: response.data });
    dispatch({
      type: "get",
      recepts: response.data,
    });
  }

  return (
    <>
      <ContextCurrentPage.Provider
        value={{
          currentPage: currentPage,
          setCurrentPage: setCurrentPage,
          data: recepts,
        }}
      >
        <Header setCurentPage={setCurrentPage} />
        {renderPage(currentPage, recepts)}
      </ContextCurrentPage.Provider>
    </>
  );
}

export default App;
