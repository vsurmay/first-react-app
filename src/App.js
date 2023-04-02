import "./App.scss";
import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import { useSelector } from "react-redux";

function App() {
  const [showModal, setShowModal] = useState(false);

  const data = useSelector((state) => {
    console.log(state);
  });

  return (
    <>
      {/* <Header /> */}
      hey
    </>
  );
}

export default App;
