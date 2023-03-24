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
    newData.category = element[0].name;
    element[0].items.push(newData);
    const response = await axios.put(
      `http://localhost:3004/recipes/${element[0].id}`,
      element[0]
    );
  }

  async function deleteRecept(category, currentEl) {
    const currentCategory = category.filter(
      (el) => el.name === currentEl.category
    );
    currentCategory[0].items = currentCategory[0].items.filter(
      (el) => el.recipe !== currentEl.recipe
    );
    const response = await axios.put(
      `http://localhost:3004/recipes/${currentCategory[0].id}`,
      currentCategory[0]
    );

    dispatch({
      type: "deleteRecept",
      id: currentCategory[0].id,
      newData: response.data,
    });
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
          deleteRecept: deleteRecept,
        }}
      >
        <Header setCurentPage={setCurrentPage} />
        {renderPage(currentPage, recepts)}
      </ContextCurrentPage.Provider>
    </>
  );
}

export default App;
