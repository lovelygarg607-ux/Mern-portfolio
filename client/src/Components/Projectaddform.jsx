import React from 'react'
import "../styles/projectaddform.css"
import Header from "./Header"
import Sidebar from './Sidebar';

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from 'react';
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";




 const Projectaddform = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [formValue, setFormValue] = useState({
        title: "",
        description: "",
        techStack: "",
        githubLink: "",


    })

    const [projectimage, setProjectimage] = useState(null);
    const [projectimgurl, setProjectimgurl] = useState(null)

    const handelfile = (e) => {
        const image = e.target.files[0];
        setProjectimage(image)


        setProjectimgurl(URL.createObjectURL(image))

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

        if (!projectimage) {
            Swal.fire({
                title: "Please upload a project image",
                icon: "error",
            });
            return;
        }

        try {
            setLoading(true);

            const formdata = new FormData();
            formdata.append("title", formValue.title);
            formdata.append("description", formValue.description);
            formdata.append("techStack", formValue.techStack);
            formdata.append("githubLink", formValue.githubLink);
            formdata.append("projectimage", projectimage);

            const projectresponse = await axios.post(
                "/portfolio/project/addproject",
                formdata,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (projectresponse.data.status === "success") {
                Swal.fire({
                    title: projectresponse.data.message,
                    icon: "success",
                });

                setFormValue({
                    title: "",
                    description: "",
                    techStack: "",
                    githubLink: "",
                });

                setProjectimage(null);
                setProjectimgurl(null);

                navigate("/portfolio");
            } else {
                Swal.fire({
                    title: projectresponse.data.message,
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


                    <div className="project-add-wrapper">
                        <div className="project-card">
                            <h2>Add New Project</h2>

                            <form onSubmit={handelSubmit}>
                                <div className="form-group">
                                    <label>Project Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formValue.title}
                                        onChange={handelChange}
                                        placeholder="Enter project title"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea
                                        name="description"
                                        value={formValue.description}
                                        onChange={handelChange}
                                        placeholder="Project description"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Tech Stack</label>
                                    <input
                                        type="text"
                                        name="techStack"
                                        value={formValue.techStack}
                                        onChange={handelChange}
                                       
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Project Image</label>

                                    <label className="upload-box">
                                        {projectimgurl ? (
                                            <img
                                                src={projectimgurl}
                                                alt="preview"
                                                className="preview-img"
                                            />
                                        ) : (
                                            "Click to upload image"
                                        )}

                                        <input type="file" onChange={handelfile} hidden />
                                    </label>
                                </div>


                                <div className="form-group">
                                    <label>GitHub Link</label>
                                    <input
                                        type="text"
                                        name="githubLink"
                                        value={formValue.githubLink}
                                        onChange={handelChange}
                                        placeholder="https://github.com/username"
                                    />
                                </div>

                                <button className="submit-btn">Add Project</button>
                            </form>
                        </div>
                    </div>

                </main>
            </div>
        </>





    )
}


export default Projectaddform;
