

import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-col brand">
          <h3>Lovely Garg</h3>
          <p>
            MERN Stack Developer crafting modern, scalable & visually appealing
            web applications.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* CENTER */}
        <div className="footer-col links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-col contact">
          <h4>Have a Question?</h4>
          <p><i className="fas fa-map-marker-alt"></i> Faridabad, India</p>
          <p><i className="fas fa-phone-alt"></i> +91 98XXXXXXXX</p>
          <p><i className="fas fa-envelope"></i> lovelygarg607@gmail.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Lovely Garg. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

