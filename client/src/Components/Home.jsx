import React from "react";
import "../styles/home.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, Download } from "lucide-react";
import developerImage from "../Images/female-developer-background_665280-9650.avif";
import { Typewriter } from "react-simple-typewriter";

import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Project";
import Footer from "./Footer";
import TechnicalSkill from "./TechnicalSkill";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="home-page" id="home">
        <main className="container">
          <section className="hero">
            {/* LEFT */}
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="hero-intro">Hi, I'm</p>

              <motion.h2
                className="hero-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.span
                  className="hero-name"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  Lovely
                </motion.span>{" "}
                <motion.span
                  className="hero-surname"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                >
                  Garg
                </motion.span>

                <span className="hero-dash">—</span>
                <span className="typing-text">
                  <Typewriter
                    words={["Frontend Developer", "Full-Stack Developer"]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={60}
                    delaySpeed={1500}
                  />
                </span>
              </motion.h2>

              <p className="hero-desc">
                I build fast, accessible and scalable web applications using the
                MERN stack. Passionate about clean UI, performance and real-world
                problem solving.
              </p>

              <div className="hero-buttons">
                {/* <a href="#projects" className="btn-primary">
                  View Projects
                </a> */}

                <button
                  className="btn-primary"
                  onClick={() =>
                    document.getElementById("projects")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  View Projects
                </button>


             <a
     href="/resume.pdf"
    target="_blank"
   rel="noopener noreferrer"
   className="btn-primary"
>
   <Download size={16} /> Open/Download Resume
 </a>





              </div>

              <div className="social-icons">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              className="hero-image"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
            >
              <motion.div
                className="image-card"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <img src={developerImage} alt="Developer" />
              </motion.div>
            </motion.div>
          </section>
        </main>
      </div>

      <About />
      <TechnicalSkill />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;


