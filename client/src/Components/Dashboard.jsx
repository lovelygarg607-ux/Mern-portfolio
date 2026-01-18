

import "../styles/dashboard.css"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import Header from './Header'
import Sidebar from './Sidebar'
import { setProfileData } from '../reducers/Reducers.js'

const Dashboard = () => {

    

    const Dispatch = useDispatch()
    const profileData = useSelector((state) => state.profile)
    console.log(profileData)

    const getProfile = async () => {
        try {
            const profileresponse = await axios.get(`/portfolio/profile/getprofile/${localStorage.getItem("loginid")}`)

            if (profileresponse.data.status === "success") {
                Dispatch(setProfileData(profileresponse.data.existingprofile))


            }
            else {
                console.log("Something went wrong")
            }
        } catch (error) {
            console.log("getprofile error", error)
        }
    }


    if (!profileData) {
        getProfile()
    }





    return (
        <>






            <div className="main-dashboard">
                <Sidebar/>
              






                <main class="main-content">
                    <Header/>





                    <div className="dashboard-container">

                        {/* Welcome Section */}
                        <div className="welcome-banner">
                            <div className="welcome-text">
                                <h1>Good Morning, <b>{profileData?.personname}</b></h1>
                                <p>Your MERN developer dashboard overview for today.</p>
                            </div>
                            <img
                                src="https://merakiui.com/images/components/illustration.svg"
                                alt="Illustration"
                                className="welcome-illustration"
                            />
                        </div>

                        {/* Stats Section */}
                        <div className="stats-grid">

                            {/* Projects */}
                            <div className="stat-card">
                                <div className="stat-header">
                                    <div className="stat-icon appointments">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M4 4h12v12H4z" />
                                        </svg>
                                    </div>
                                    <h3 className="stat-title">Projects</h3>
                                </div>
                                <p className="stat-value">12</p>
                                <div className="stat-comparison positive">
                                    <svg width={16} height={16} fill="currentColor">
                                        <path d="M7.247 4.86l-4.796 5.481a1 1 0 0 0 .753 1.659h9.592a1 ..." />
                                    </svg>
                                    <span>25% growth</span>
                                </div>
                            </div>

                            {/* Clients */}
                            <div className="stat-card">
                                <div className="stat-header">
                                    <div className="stat-icon patients">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                            <path d="M10 3a3 3 0 110 6 3 3 0 010-6z" />
                                        </svg>
                                    </div>
                                    <h3 className="stat-title">Active Clients</h3>
                                </div>
                                <p className="stat-value">7</p>
                                <div className="stat-comparison positive">
                                    <svg width={16} height={16} fill="currentColor">
                                        <path d="M7.247 4.86l-4.796..." />
                                    </svg>
                                    <span>10% this month</span>
                                </div>
                            </div>

                            {/* Pending Tasks */}
                            <div className="stat-card">
                                <div className="stat-header">
                                    <div className="stat-icon cancel">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                            <path d="M10 18a8 8 0 100-16 ..." />
                                        </svg>
                                    </div>
                                    <h3 className="stat-title">Pending Tasks</h3>
                                </div>
                                <p className="stat-value">3</p>
                                <div className="stat-comparison negative">
                                    <svg width={16} height={16} fill="currentColor">
                                        <path d="M7.247 11.14L2.451 5.658..." />
                                    </svg>
                                    <span>Needs Attention</span>
                                </div>
                            </div>

                            {/* Completed Tasks */}
                            <div className="stat-card">
                                <div className="stat-header">
                                    <div className="stat-icon visited">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                            <path d="M10 9a3 3 0 100-6..." />
                                        </svg>
                                    </div>
                                    <h3 className="stat-title">Completed Tasks</h3>
                                </div>
                                <p className="stat-value">18</p>
                                <div className="stat-comparison positive">
                                    <svg width={16} height={16} fill="currentColor">
                                        <path d="M7.247 4.86l..." />
                                    </svg>
                                    <span>40% more than last week</span>
                                </div>
                            </div>

                        </div>

                        {/* Tables Section */}
                        <div className="dashboard-section">

                            {/* Recent Work */}
                            <div className="list-card">
                                <div className="list-card-header">
                                    <h3>Recent Work</h3>
                                    <a id="showAllLink">Show all</a>
                                </div>

                                <div className="table-container">
                                    <table className="data-table">
                                        <thead>
                                            <tr>
                                                <th>Project</th>
                                                <th>Client</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td><b>Portfolio Website</b></td>
                                                <td>Lovely Garg</td>
                                                <td>17 Mar 2025</td>
                                                <td><span className="status-pill confirmed">Completed</span></td>
                                            </tr>

                                            <tr>
                                                <td><b>E-Commerce App</b></td>
                                                <td>Local Business</td>
                                                <td>21 Mar 2025</td>
                                                <td><span className="status-pill pending">In Progress</span></td>
                                            </tr>

                                            <tr>
                                                <td><b>Clinic Management</b></td>
                                                <td>HealthCare Co.</td>
                                                <td>11 Apr 2025</td>
                                                <td><span className="status-pill cancelled">Paused</span></td>
                                            </tr>

                                            <tr>
                                                <td><b>Real-time Chat App</b></td>
                                                <td>StartUp</td>
                                                <td>22 Apr 2025</td>
                                                <td><span className="status-pill confirmed">Completed</span></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Recent Clients */}
                            <div className="list-card">
                                <div className="list-card-header">
                                    <h3>Recent Clients</h3>
                                    <a href="#">Show all</a>
                                </div>

                                <div className="table-container">
                                    <table className="data-table">
                                        <thead>
                                            <tr>
                                                <th>Client</th>
                                                <th>Project</th>
                                                <th>Contact</th>
                                            </tr>
                                        </thead>

                                        <tbody>

                                            <tr>
                                                <td>
                                                    <div className="patient-info">
                                                        <img src="https://i.pravatar.cc/150?u=client1" alt="Client" />
                                                        <span><b>Riya Singh</b></span>
                                                    </div>
                                                </td>
                                                <td>Fitness App</td>
                                                <td>riya@email.com</td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div className="patient-info">
                                                        <img src="https://i.pravatar.cc/150?u=client2" alt="Client" />
                                                        <span><b>Aman Verma</b></span>
                                                    </div>
                                                </td>
                                                <td>Portfolio Redesign</td>
                                                <td>aman@email.com</td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div className="patient-info">
                                                        <img src="https://i.pravatar.cc/150?u=client3" alt="Client" />
                                                        <span><b>Ayush Gupta</b></span>
                                                    </div>
                                                </td>
                                                <td>CRM Dashboard</td>
                                                <td>ayush@email.com</td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div className="patient-info">
                                                        <img src="https://i.pravatar.cc/150?u=client4" alt="Client" />
                                                        <span><b>Simran Kaur</b></span>
                                                    </div>
                                                </td>
                                                <td>Landing Page</td>
                                                <td>simran@email.com</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>





                </main>
            </div>




        </>



    )
}





export default Dashboard;


