import React from "react";
import "./prices.css";
import { tableMaintenance } from "../../services/prices";
import { tablePrices } from "../../services/prices";

import { motion } from "framer-motion";
const Prices = () => {
  return (
    <section className="prices section" id="prices">
      <h1 className="title__prices">Preços</h1>
      <div className="content__prices container">
        {tablePrices.map((price) => (
          <div className="card">
            <div className="card__prices" key={price.id}>
              <span className="span__price"></span>
              <h1 className="title__card">{price.title}</h1>
              <h3>{price.price}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Prices;
