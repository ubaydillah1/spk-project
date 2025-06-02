import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024); 
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    if (isMobile && isOpen) {
      toggleSidebar();
    }
  }, [location.pathname]);

  const menuItems = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Mobile Burger Button */}
      {isMobile && (
        <div className="lg:hidden fixed top-4 left-4 z-50">
          <button
            onClick={toggleSidebar}
            className="p-2 focus:outline-none bg-gray-800 rounded-md shadow-lg"
            aria-label="Toggle menu"
          >
            <div
              className={`w-6 h-0.5 bg-blue-400 transition-all duration-300 ${
                isOpen ? "transform rotate-45 translate-y-1.5" : "mb-1.5"
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-blue-400 transition-all duration-300 ${
                isOpen ? "opacity-0" : "mb-1.5"
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-blue-400 transition-all duration-300 ${
                isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
              }`}
            ></div>
          </button>
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0 shadow-xl" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 bg-gray-900 w-64 p-4 text-white flex flex-col`}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-blue-400">Admin Panel</h2>
          {isMobile && (
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-1 text-blue-400 hover:text-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center p-3 rounded-lg transition-all duration-200 group ${
                      isActive
                        ? "bg-gray-800 text-blue-600"
                        : "text-blue-400 hover:bg-gray-800 hover:text-blue-600"
                    }`
                  }
                >
                  <span className="mr-3 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-gray-700 pt-4 mt-auto">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center">
              <span className="text-blue-400">AD</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">Admin User</p>
              <p className="text-xs text-gray-400">admin@example.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && isMobile && (
        <div
          onClick={toggleSidebar}
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30 backdrop-blur-sm"
        ></div>
      )}
    </>
  );
};

export default Sidebar;