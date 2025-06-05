import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Data User Baru", path: "/data-user" },
    { name: "Data Kriteria", path: "/data-kriteria" },
    { name: "Data Sub", path: "/data-sub" },
    { name: "Data Alternatif", path: "/data-alternatif" },
    { name: "Proses", path: "/proses" }
  ];

  return (
    <div className="w-64 bg-black text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">My App</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.path} className={`mb-4 ${location.pathname === item.path ? "text-yellow-400" : ""}`}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
