import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div id="branding">
          <h1>
            <span className="highlight">Clarusway </span> Web Design
          </h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link to={"about"}>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link to={"services"}>
                <a>Services</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
