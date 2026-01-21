import React from 'react'
import "./../styles/skilladdform.css"
import Header from "./Header"
import Sidebar from './Sidebar';

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from 'react';
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Skilladdform = () => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [formValue, setFormValue] = useState({
        name: "",
        category: "",
        level: "",



    })

    const [iconimage, seticonimage] = useState(null);
    const [iconimgurl, seticonimgurl] = useState(null)

    const handelfile = (e) => {
        const image = e.target.files[0];
        seticonimage(image)


        seticonimgurl(URL.createObjectURL(image))

    }
    const handelChange = (e) => {
        const { name, value } = e.target;

        setFormValue({
            ...formValue,
            [name]: value

        })
    }


    const handelSubmit = async (e) => {
        e.preventDefault();

        if (!iconimage) {
            Swal.fire({
                title: "Please upload a icon image",
                icon: "error",
            });
            return;
        }

        try {
            setLoading(true);

            const formdata = new FormData();
            formdata.append("name", formValue.name);
            formdata.append("level", formValue.level);
            formdata.append("category", formValue.category);

            formdata.append("iconimage", iconimage);

            const skillresponse = await axios.post(
                 "https://mern-portfolio-d3xy.onrender.com/portfolio/skill/addskill",
                formdata,
              
            );

            if (skillresponse.data.status === "success") {
                Swal.fire({
                    title: skillresponse.data.message,
                    icon: "success",
                });

                setFormValue({
                    name: "",
                    category: "",
                    level: "",

                });

                seticonimage(null);
                seticonimgurl(null);

                navigate("/portfolio");
            } else {
                Swal.fire({
                    title: skillresponse.data.message,
                    icon: "error",
                });
            }
        } catch (error) {
            console.error(error);
            Swal.fire({
                title: "Something went wrong",
                icon: "error",
            });
        } finally {
            setLoading(false);
        }
    };








    return (
        <>

            <Backdrop
                sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>


            <div className="main-dashboard">
                <Sidebar />
                <main className="main-content">
                    <Header />

                    <div className="skill-form">


                        <div className="project-add-wrapper">
                            <div className="project-card">
                                <h2>Add Skill </h2>

                                <form onSubmit={handelSubmit}>
                                    <div className="form-group">
                                        <label>Skill </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formValue.name}
                                            onChange={handelChange}
                                            placeholder="Enter your Skill  name"
                                        />
                                    </div>
                                        <div className="form-group">
                                        <label>Category</label>

                                    <select name="level" value={formValue.level} onChange={handelChange}>
                                        
                                        <option value="">Select Level</option>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Advanced">Advanced</option>
                                    </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Category</label>
                                        <select name="category" value={formValue.category} onChange={handelChange}>
                                            <option value="">Select Category</option>
                                            <option value="Frontend">Frontend</option>
                                            <option value="Backend">Backend</option>
                                            <option value="Database">Database</option>
                                            <option value="Tools">Tools</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>icon Image</label>

                                        <label className="upload-box">
                                            {iconimgurl ? (
                                                <img
                                                    src={iconimgurl}
                                                    alt="preview"
                                                    className="preview-img"
                                                />
                                            ) : (
                                                "Click to upload icon image"
                                            )}

                                            <input type="file" onChange={handelfile} hidden />
                                        </label>
                                    </div>




                                    <button className="submit-btn">Add Skill</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </main>
            </div>







        </>
    )
}

export default Skilladdform
