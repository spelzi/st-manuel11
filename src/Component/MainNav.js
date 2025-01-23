// Importing required dependencies and components
import React, { useState } from "react";
import img from "./image/6e6769b4-4273-47c9-b350-4d765c8959b5.JPG";

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbars1">
      <div className="navbar11">
        <a href="/">
          <img src={img} alt="logo" className="logo-img" />
        </a>
        {/* Button to toggle dropdown */}
        <button className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? "" : "unclicked"}`} />
          <span className={`bar ${isOpen ? "" : "unclicked"}`} />
          <span className={`bar ${isOpen ? "" : "unclicked"}`} />
        </button>
        <div className={`nav ${isOpen ? "nav-open" : ""}`}>
          <a href="#about" className="logo">
            About
          </a>
          <a href="#knowledge" className="logo">
            Knowledge
          </a>
          <a href="#project" className="logo">
            Project
          </a>
          <a href="#contact" className="logo">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
