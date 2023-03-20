import React from "react";
import Data from "./Data";
import "./home.css";
import Social from "./Social";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container">
        <div className="home__content grid">
          <Social />

          <div className="home__img"></div>
          <Data />
        </div>
      </div>
    </section>
  );
};

export default Home;