import React, { useState } from "react";

import "./header.css";
import { HiOutlineMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
function Header() {
  const [closed, setClosed] = useState(true);

  const handleClick = () => {
    setClosed(!closed);
  };

  return (
    <section>
      <div className="header-container">
        <div className="wrapper">
          <nav className="nav">
            <div className="logo">
              <img src="./logo.png" alt="logo" />
            </div>
            <div className="humberger menu" onClick={handleClick}>
              {closed ? (
                <HiOutlineMenu
                  color="white"
                  style={{ fontSize: "30px", cursor: "pointer" }}
                />
              ) : (
                <MdClose
                  color="white"
                  style={{ fontSize: "30px", cursor: "pointer" }}
                />
              )}
            </div>
            <div className={closed ? "nav-menu hide" : "nav-menu"}>
              <li className="nav-items">O nás</li>
              <li className="nav-items">Služby</li>
              <li className="nav-items">Blog</li>
              <li className="nav-items" id="active-nav">
                Kontakt
              </li>
              <li className="mobile">
                <div className="mobile-logo">
                  <img src="./phone.png" alt="logo" />
                </div>
                <div className="phone-number">
                  <p>Zavolajte (7:00-15:00)</p>
                  <p>
                    <b>0-29-029-3</b>
                  </p>
                </div>
              </li>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Header;
