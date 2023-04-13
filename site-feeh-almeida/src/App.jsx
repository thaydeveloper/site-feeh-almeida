import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Gallery from "./components/galery/Gallery";
import { tablePrices } from "./services/prices";
import Prices from "./components/prices/Prices";
import Scheduling from "./components/scheduling/Scheduling";
import MyContext from "./contexts/MyContext";

function App() {
  return (
    <MyContext.Provider value={tablePrices}>
      <Header />
      <main className="main">
        <Home />
        <Gallery />
        <Prices />
        <Scheduling />
      </main>
    </MyContext.Provider>
  );
}

export default App;
