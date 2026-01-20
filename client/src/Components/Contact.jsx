
import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/contact.css";
import Swal from "sweetalert2";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";



const Contact = () => {

    const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  
  const [loading, setLoading] = useState(false);


  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

 try {
  const contactresponse = await axios.post(
    "https://mern-portfolio-d3xy.onrender.com/portfolio/contact/message",
    formValue,
  
  );

      if (contactresponse.data.status === "success") {
        Swal.fire({
          title: contactresponse.data.message,
          icon: "success",
        });

        setFormValue({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: contactresponse.data.message,
        });
      }
    } catch (error) {
      console.log("message error", error);
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };




  return (
    <>
        <Backdrop
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
            open={loading}
    
          >
            <CircularProgress color="inherit" />
          </Backdrop>

      

      <section id="contact" className="contact-bg">
        <motion.div
          className="contact-wrapper container"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <div className="contact-form">
            <h2>Feel free to get in touch</h2>
            <p>
              Have an idea or project in mind? Let’s build something great
              together.
            </p>

            <form onSubmit={handelSubmit}>
              <div className="row">
                <input type="text" placeholder="Name" name="name" onChange={handelChange} value={formValue.name} required />
                <input type="email" placeholder="Email"  name="email" onChange={handelChange} value={formValue.email} required />
              </div>

              <input type="text" placeholder="Subject" name="subject" onChange={handelChange} value={formValue.subject} required />
                      <input type="text" placeholder="Message" name="message" onChange={handelChange} value={formValue.message} required />
              <button>Send Message</button>
            </form>
          </div>

          {/* RIGHT INFO */}
          <div className="contact-info">
            <h3>Don’t hesitate to contact us</h3>
            <p>We are always open to discuss your project.</p>

            <div className="contact-cards">
              <div className="contact-card">
                <span className="icon purple">🏢</span>
                <div>
                  <h5>Office</h5>
                  <p>Faridabad, India</p>
                </div>
              </div>

              <div className="contact-card">
                <span className="icon orange">📞</span>
                <div>
                  <h5>Phone</h5>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="contact-card">
                <span className="icon blue">⏰</span>
                <div>
                  <h5>Work Hours</h5>
                  <p>Mon – Fri, 9AM – 6PM</p>
                </div>
              </div>

              <div className="contact-card">
                <span className="icon green">✉️</span>
                <div>
                  <h5>Email</h5>
                  <p>lovelygarg607@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="social">
              <span>Social Media:</span>
              <div>
                <i className="fab fa-linkedin-in" />
                <i className="fab fa-github" />
                <i className="fab fa-twitter" />
                <i className="fab fa-instagram" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>


      {/* CTA */}
      <motion.section
        className="cta"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Have a project in mind? Let’s Talk</h2>
        
        <button
          className="contact-btn"
          onClick={() => scrollToSection("contact")}
        >
          Contact Me
           
        </button>

        {/* <button>Contact Me</button> */}
      </motion.section>





    </>
  );
};

export default Contact;

