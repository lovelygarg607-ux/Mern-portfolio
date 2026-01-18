import React from 'react'
import "../styles/about.css"



import Navbar from './Navbar';

 const About = () => {
  return (
   <>
   <Navbar/>
    <section id="about" className="about-section">

  <div className="about-container">
  
    <div className="about-images">
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
        alt="profile"
        className="main-img"
      />
      <div className="experience-box">
        <h2>1</h2>
        <p>Years Experience</p>
      </div>
    </div>
  
    <div className="about-content">
      <span className="about-tag">About Me</span>
      <h2>
        A Passionate <span>Developer</span>
        <br />
        Who Loves to Build
      </h2>
      <p className="about-desc">
        I am a MERN Stack Developer who enjoys creating clean, scalable and
        user-friendly web applications. I focus on performance, UI/UX and
        real-world problem solving.
      </p>
      <div className="bio-card">
        <div>
          <strong>Name:</strong> Lovely Garg
        </div>
        <div>
          <strong>Email:</strong> lovelygarg607@gmail.com
        </div>
        <div>
          <strong>Role:</strong> MERN Stack Developer
        </div>
        <div>
          <strong>Location:</strong> India
        </div>
      </div>
   
    </div>
  </div>
 
  <div className="about-stats">
    <div className="stat-box">
      <h3>3+</h3>
      <p>Projects</p>
    </div>
  
    <div className="stat-box">
      <h3>3K+</h3>
      <p>Hours Coding</p>
    </div>
  </div>
</section>



   
   </>
  )
}

export default About;
