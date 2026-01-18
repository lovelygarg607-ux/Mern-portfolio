import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "antd";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import "../styles/card.css";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Card = () => {
    const [loading, setLoading] = useState(false);
    const [limit, setLimit] = useState(4);
    const [contacts, setContacts] = useState([]);
    const [totalContact, setTotalContact] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const getContactList = async () => {
        try {
            setLoading(true);

            const { data } = await axios.get(
                `/portfolio/contact/getcontactlist?page=${currentPage}&limit=${limit}`
            );

            if (data?.status === "success") {
                setContacts(Array.isArray(data.contacts) ? data.contacts : []);
                setTotalContact(data.totalrecords || 0);
            }
        } catch (error) {
            console.log("contact fetch error:", error);
        } finally {
            setLoading(false);
        }
    };

    const onChange = (page, pageSize) => {
        setCurrentPage(page);
        setLimit(pageSize);
    };

    useEffect(() => {
        getContactList();
    }, [currentPage, limit]);

    return (
        <>
            {/* Loader */}
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

                    <div className="card-container">
                        {!loading && contacts.length === 0 && (
                            <p style={{ textAlign: "center" }}>No Contact Found</p>
                        )}

                        {!loading &&
                            contacts.map((item, i) => (
                                <div className="user-card" key={i}>
                                    <div className="user-left">
                                        <div className="avatar">
                                            {item.name?.charAt(0).toUpperCase()}
                                        </div>

                                        <div className="user-info">
                                            <h3>{item.name || "N/A"}</h3>
                                            <p className="email">{item.email || "N/A"}</p>

                                            <p className="subject">
                                                <strong>Subject:</strong> {item.subject || "N/A"}
                                            </p>

                                            <p className="message">
                                                {item.message || "No message"}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            ))}

                     
                        <div className="pagination">
                            <Pagination
                                showQuickJumper
                                pageSizeOptions={[4, 8, 12, 20]}
                                current={currentPage}
                                pageSize={limit}
                                total={totalContact}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Card;


