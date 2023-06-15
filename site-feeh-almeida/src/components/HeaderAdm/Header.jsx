import React, { useState } from "react";
import "./header.css";
import { UilImages, UilBill, UilCalender } from "@iconscout/react-unicons";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/" className="nav__link active-link">
                <i className="uil uil-home nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
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
