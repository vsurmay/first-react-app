import "./App.scss";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Page from "./Pages/Page/Page";
import List from "./Pages/List/List";
import Detailes from "./Pages/Detailes/Detailes";

function App() {
  const [currentPage, setCurrentPage] = useState({
    page: "Home",
    data: null,
    addButton: false,
  });

  const renderPage = (obj) => {
    console.log(obj);
    switch (obj.page) {
      case "Home":
        return <Page data={obj.data} setCurrentPage={setCurrentPage} />;

      case "List":
        return (
          <List
            data={obj.data}
            addButton={obj.addButton}
            setCurrentPage={setCurrentPage}
            recipeId={obj.recipeId}
          />
        );

      case "Streach":
        return <Detailes data={obj.data} setCurrentPage={setCurrentPage} />;

      default:
        return <Page data={obj.data} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <>
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      {renderPage(currentPage)}
    </>
  );
}

export default App;
