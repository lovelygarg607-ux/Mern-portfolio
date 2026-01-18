import React, { useState } from 'react'
import "../styles/dashboard.css"
import { useDispatch, useSelector } from 'react-redux'

import { Link, useNavigate } from 'react-router-dom'
import user from "../Images/user.webp"
import { setProfileData } from "../reducers/Reducers.js"



const Sidebar = () => {
    const Dispatch = useDispatch()
    const Navigate = useNavigate()

    const profileData = useSelector((state) => state.profile)

    const [isOpen, setIsOpen] = useState(false)

    const [active, setactive] = useState("")

    const [sidebaropen, setSidebaropen] = useState(false)
    const [activedropdown, setactivedropdown] = useState("")


    const toggledropdown = () => {
        setIsOpen(!isOpen)
    }

    const handelLogout = () => {
        localStorage.removeItem("loginid");
        localStorage.removeItem("usertype");
        localStorage.removeItem("token")
        Dispatch(setProfileData(null))


        Navigate("/login")

    }
    return (
        <>
            <div className="main-sidebar"> <div className={`sidebar ${sidebaropen ? "open" : ""}`}></div>
                <div className="sidebar">

                    {/* Logo Section */}
                    <div className="sidebar-header">
                        <svg className="sidebar-logo-icon" xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                            <path d="M3 3h18v18H3z" />
                            <path d="M3 9h18M9 21V9" />
                        </svg>
                        <h1 className="sidebar-logo">Dashboard</h1>
                    </div>

                    {/* Profile Section */}
                    <div className="sidebar-profile">
                        <img
                            src={profileData?.profileImage ? profileData.profileImage : user}
                            alt="profile"
                        />

                        <h3>{profileData?.personname || "Your Name"}</h3>
                        <p style={{ color: "#fff" }}>
                            {profileData?.userID.email || "developer@example.com"}
                        </p>
                    </div>

                    {/* Menu List */}
                    <div className="sidebar-menu">

                        <li className="menu-title" style={{ color: "#fff" }}>Main</li>

                        {/* Dashboard */}
                        <li
                            className={active === "dashboard" ? "sidebar-menu-item active" : "sidebar-menu-item"}
                            onClick={() => setactive("dashboard")}
                        >
                            <Link to={"/dashboard"}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <rect x={3} y={3} width={7} height={7} />
                                    <rect x={14} y={3} width={7} height={7} />
                                    <rect x={14} y={14} width={7} height={7} />
                                    <rect x={3} y={14} width={7} height={7} />
                                </svg>
                                <span>Dashboard</span>
                            </Link>
                        </li>

                        <li
                            className={`sidebar-menu-item ${activedropdown === "project" ? "active" : ""}`}
                            onClick={() =>
                                setactivedropdown(activedropdown === "project" ? "" : "project")
                            }
                        >
                            <a href="#">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"

                                >

                                    <circle cx="12" cy="7" r="3" />


                                    <path d="M5 21c0-4 3.5-7 7-7s7 3 7 7" />
                                </svg>


                                <span >Project</span>

                                {/* Dropdown arrow */}
                                {activedropdown === "project" ? (
                                    <i style={{ marginLeft: "80px" }} className="fa-solid fa-caret-up" onClick={toggledropdown} />
                                ) : (
                                    <i style={{ marginLeft: "80px" }} className="fa-solid fa-caret-down" onClick={toggledropdown} />
                                )}
                            </a>

                            <ul
                                className="ml-menu"
                                style={{
                                    display: activedropdown === "project" ? "block" : "none",
                                    transition: "0.3s",
                                }}
                            >
                                <li className={active === "project" ? "active" : ""}  >
                                    <Link to={`/addproject`}>
                                        Add project
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li
                            className={`sidebar-menu-item ${activedropdown === "skill" ? "active" : ""}`}
                            onClick={() =>
                                setactivedropdown(activedropdown === "skill" ? "" : "skill")
                            }
                        >
                            <a href="#">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"

                                >

                                    <circle cx="12" cy="7" r="3" />


                                    <path d="M5 21c0-4 3.5-7 7-7s7 3 7 7" />
                                </svg>


                                <span >Skill</span>

                                {/* Dropdown arrow */}
                                {activedropdown === "skill" ? (
                                    <i style={{ marginLeft: "80px" }} className="fa-solid fa-caret-up" onClick={toggledropdown} />
                                ) : (
                                    <i style={{ marginLeft: "80px" }} className="fa-solid fa-caret-down" onClick={toggledropdown} />
                                )}
                            </a>

                            <ul
                                className="ml-menu"
                                style={{
                                    display: activedropdown === "skill" ? "block" : "none",
                                    transition: "0.3s",
                                }}
                            >
                                <li className={active === "skill" ? "active" : ""}  >
                                    <Link to={`/addskill`}>
                                        Add Skill
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        {/* Experience */}
                        <li
                            className={active === "experience" ? "sidebar-menu-item active" : "sidebar-menu-item"}
                            onClick={() => setactive("experience")}
                        >
                            <Link to={"/experience"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M4 4h16v4H4zM4 12h16v8H4z" />
                                </svg>
                                <span>Experience</span>
                            </Link>
                        </li>
                         <li
                            className={`sidebar-menu-item ${activedropdown === "contact" ? "active" : ""}`}
                            onClick={() =>
                                setactivedropdown(activedropdown === "contact" ? "" : "contact")
                            }
                        >
                            <a href="#">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"

                                >

                                    <circle cx="12" cy="7" r="3" />


                                    <path d="M5 21c0-4 3.5-7 7-7s7 3 7 7" />
                                </svg>


                                <span >Contact</span>

                                {/* Dropdown arrow */}
                                {activedropdown === "contact" ? (
                                    <i style={{ marginLeft: "80px" }} className="fa-solid fa-caret-up" onClick={toggledropdown} />
                                ) : (
                                    <i style={{ marginLeft: "80px" }} className="fa-solid fa-caret-down" onClick={toggledropdown} />
                                )}
                            </a>

                            <ul
                                className="ml-menu"
                                style={{
                                    display: activedropdown === "contact" ? "block" : "none",
                                    transition: "0.3s",
                                }}
                            >
                                <li className={active === "contact" ? "active" : ""}  >
                                    <Link to={`/contactlist`}>
                                        Show Message
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        {/* Contact */}
                       
                    </div>

                    {/* Logout */}
                    <div className="sidebar-menu logout-link">
                        <li className="sidebar-menu-item">
                            <a href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                    <polyline points="16 17 21 12 16 7" />
                                    <line x1={21} y1={12} x2={9} y2={12} />
                                </svg>
                                <span>
                                    <Link onClick={handelLogout}>Logout</Link>
                                </span>
                            </a>
                        </li>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Sidebar