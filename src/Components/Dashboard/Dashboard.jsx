import React from "react";
import Analytics from "./Analytics/Analytics";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="hidden md:block col-span-3">
        <Sidebar />
      </div>
      <div className="md:col-span-9 col-span-12 min-h-screen">
        <Analytics />
      </div>
    </div>
  );
};

export default Dashboard;
