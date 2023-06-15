import React, { useState } from "react";
import "./header.css";
import { UilImages, UilBill, UilCalender } from "@iconscout/react-unicons";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          Fernanda
        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-home nav__icon"></i> Home
              </a>
            </li>

            {/* <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> Sobre
              </a>
            </li> */}

            <li className="nav__item">
              <a href="#gallery" className="nav__link">
                <UilImages className="nav__icon" /> Galeria
              </a>
            </li>
            <li className="nav__item">
              <a href="#prices" className="nav__link">
                <UilBill className="nav__icon" /> Preços
              </a>
            </li>

            <li className="nav__item">
              <a href="#scheduling" className="nav__link">
                <UilCalender className="nav__icon" /> Agendamentos
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>
                Contato
              </a>
            </li>

            <li className="nav__item" onClick={() => setAdm(!adm)}>
              <a href="/login" className="nav__link">
                <i className="uil uil-message nav__icon"></i>
                Admin
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
