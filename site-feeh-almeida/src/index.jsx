import React, { useState } from "react";
import "./App.css";

import { tablePrices, tableAdditionalServices } from "./services/prices";
import MyContext from "./contexts/MyContext";
import { Router } from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

function Main() {
  const [data, setContextData] = useState({});
  const handleContextData = (newContextData) => {
    setContextData({ ...data, newData: newContextData });
  };

  return (
    <MyContext.Provider
      value={{ tablePrices, tableAdditionalServices, data, handleContextData }}
    >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default Main;
