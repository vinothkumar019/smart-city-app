// client/src/components/Main.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      className="main-container"
      style={{ padding: "30px", maxWidth: "800px", margin: "0 auto" }}
    >
      <h1>🎯 Smart City Complaint Management System</h1>
      <p>
        This project is a <strong>web-based Smart City Complaint Management System</strong> that allows citizens to
        report issues like <em>potholes, water leakage, streetlight faults, pollution</em>, and more.
      </p>
      <p>
        The system ensures that these complaints are visible to city officials in real-time,
        who can then take timely action.
      </p>
      <p>
        It is built using the <strong>MERN stack</strong> (MongoDB, Express, React, Node.js) and provides separate dashboards
        for <strong>users (citizens)</strong> and <strong>admins (city staff)</strong>.
      </p>
      <p>
        Citizens can submit complaints with <strong>images and location</strong>,
        and officials can <strong>track, filter, and resolve</strong> them efficiently.
      </p>

      <button onClick={handleLogout} style={{ marginTop: "20px" }}>
        Logout
      </button>
    </div>
  );
}
