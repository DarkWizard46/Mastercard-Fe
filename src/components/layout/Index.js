import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom"; 

const MainLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
