import React, { useState, useEffect } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <header className={`navbar ${show ? "show" : ""}`}>
      <div className="nav-inner">

        <div className="logo">
          <span className="logo-circle">LG</span>
          <span className="logo-text">Lovely</span>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <button
          className="nav-btn"
          onClick={() => scrollToSection("contact")}
        >
          Let’s Talk
        </button>

      </div>
    </header>
  );
};

export default Navbar;




