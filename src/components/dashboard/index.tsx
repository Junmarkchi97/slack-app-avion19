import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./pages/sidebar";
import Message from "./pages/message";
import "../../styles/dashboard/index.css";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <Routes>
        <Route path="messages" element={<Message />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
