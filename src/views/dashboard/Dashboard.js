import React from "react";
import Navbar from "../../components/layout/navbar/Navbar";
import Sidebar from "../../components/layout/sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />
        <div className="p-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p>Selamat datang di dashboard Mastercard!</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
