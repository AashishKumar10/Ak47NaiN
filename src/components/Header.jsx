import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import logo from "../assets/Images/Logo/Ak47NaiN6.png";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={styles.header}>
      <div className="container" style={styles.container}>
        <div className="head" style={styles.head}>
          <img src={logo} alt="logo" className="logo" />

          <div
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className={`headd nav ${menuOpen ? "open" : ""}`}>


            <ul>
              <li><NavLink
                to="/"
                onClick={() => setMenuOpen(false)}

                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : "hhhj"}`
                }
              >
                HOME
              </NavLink></li>
              <li><NavLink
                to="/AllFamilys"
                onClick={() => setMenuOpen(false)}

                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : "hhhj"}`
                }
              >
                ALL MEMBER
              </NavLink></li>
              <li><NavLink
                to="/Discover"
                onClick={() => setMenuOpen(false)}

                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : "hhhj"}`
                }
              >
                PHOTOS
              </NavLink></li>
              <li><NavLink
                to="/about"
                onClick={() => setMenuOpen(false)}

                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : "hhhj"}`
                }
              >
                ABOUT
              </NavLink></li>
              <li><NavLink
                to="/Contact"
                onClick={() => setMenuOpen(false)}

                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : "hhhj"}`
                }
              >
                CONTACT
              </NavLink></li>
            </ul>

          </nav>
        </div>
      </div>
    </header >
  );
};

const styles = {
  header: {
    backgroundColor: "#442222",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  head: {

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px"
  },

  headd: {
    display: "flex",
  },
  container: {
    maxWidth: "1150px",
    margin: "auto", width: "100%"
  }
}

export default Header;