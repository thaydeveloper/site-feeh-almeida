import React, { useCallback, useState } from "react";
import "./App.css";

import { tablePrices, tableAdditionalServices } from "./services/prices";
import MyContext from "./contexts/MyContext";
import { Router } from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import api from "./services/api";

function Main() {
  const [data, setContextData] = useState([]);

  const getAlluser = useCallback(async () => {
    try {
      const response = await api.get("/users");

      if (!response) return;
      setContextData(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  /* const handleContextData = (newContextData) => {
    setContextData({ newContextData });
  }; */
  useEffect(() => {
    getAlluser();
  }, []);

  if (data.length < 0) {
    return <div>Carregando...</div>;
  }
  return (
    <MyContext.Provider value={{ tablePrices, tableAdditionalServices, data }}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default Main;
