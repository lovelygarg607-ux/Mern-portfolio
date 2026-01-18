import React, { useState } from 'react'
import "./../styles/form.css"
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from "axios"
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
// import loginImage from "../images/images/shape-reg-provider-3.webp"
// import Navbar from "../components/Landing Page copy/Navbar"

const Login = () => {

  const Navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [showpassword, setshowpassword] = useState(false)

  const togglepassword = () => {
    setshowpassword(!showpassword)
  }



  const [formvalue, setFormvalue] = useState({
    email: "",
    password: "",
  })



  const handleChange = (e) => {
    const { name, value } = e.target
    setFormvalue({
      ...formvalue,
      [name]: value
    })
  }


  const handelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const loginresponse = await axios.post(
        "/portfolio/admin/login",
        formvalue,
          {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }

      );

      // SUCCESS
      if (loginresponse.data.status === "success") {
        localStorage.setItem("token", loginresponse.data.token);

        Swal.fire({
          title: loginresponse.data.message,
          icon: "success"
        });

        Navigate("/dashboard");
      }

       else {
        setLoading(false)

        Swal.fire({
          icon: "error",
          title: loginresponse.data.message,
         
        });


      }



    } catch (error) {

      console.log("login error", error)

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

      {/* <Navbar /> */}


      <div className="login-main-container">

        <div className="login-card-wrapper">

          {/* LEFT SIDE IMAGE */}

          {/* <img src={loginImage} alt="" /> */}


          {/* RIGHT SIDE FORM */}
          <div className="login-right-section">
            <div className="login-card">
              <h2>Login</h2>
              <p className="subtitle">Welcome Back</p>
              <form onSubmit={handelSubmit}>
                {/* EMAIL */}
                <div className="input-group">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    name="email"
                    onChange={handleChange}
                    value={formvalue.email}
                  />
                </div>

                {/* PASSWORD */}
                <div className="input-group password-group">
                  <label>Password</label>
                  <input
                    type={showpassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                    name="password"
                    onChange={handleChange}
                    value={formvalue.password}
                  />
                  <span className="eye-icon" onClick={togglepassword}>
                    {showpassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

                <button type="submit" className="login-btn">
                  Login
                </button>


              </form>
              {/* form here */}
            </div>
          </div>

        </div>

      </div>




    </>
  )
}


export default Login;
