import React, { useState } from "react";
// import Navbar from "./components/Navbar";
import SidebarProps from "./components/Sidebar";
import DashboardContent from "./pages/DashboardContent";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex">
      <SidebarProps isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1">
        <DashboardContent />
      </div>
    </div>  
  );
};

export default App;