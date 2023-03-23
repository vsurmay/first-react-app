import "./App.scss";
import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import ContextCurrentPage from "./ContextCurrentPage";
import renderPage from "./renderPage";
import receptsReducer from "./reducers/receptsReducer";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState({});
  const [recepts, dispatch] = useReducer(receptsReducer, []);

  console.log(recepts);

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

  async function adedData(newVarietyDish) {
    const response = await axios.post(
      "http://localhost:3004/recipes",
      newVarietyDish
    );
    dispatch({
      type: "aded",
      newVarDish: response.data,
    });
  }

  async function deleteData(idEl) {
    const response = await axios.delete(
      `http://localhost:3004/recipes/${idEl}`
    );
    dispatch({
      type: "delete",
      idDelete: idEl,
    });
  }

  async function changeData(element, newData) {
    console.log(element);
    newData.category = element[0].name;
    element[0].items.push(newData);
    const response = await axios.put(
      `http://localhost:3004/recipes/${element[0].id}`,
      element[0]
    );
    console.log(response.data);
  }

  return (
    <>
      <ContextCurrentPage.Provider
        value={{
          currentPage: currentPage,
          setCurrentPage: setCurrentPage,
          data: recepts,
          adedRecept: adedData,
          deleteData: deleteData,
          showModal: showModal,
          setShowModal: setShowModal,
          changeData: changeData,
        }}
      >
        <Header setCurentPage={setCurrentPage} />
        {renderPage(currentPage, recepts)}
      </ContextCurrentPage.Provider>
    </>
  );
}

export default App;
