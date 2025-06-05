// src/App.tsx
import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import DashboardContent from "./pages/DashboardContent";
import DataUser from "./pages/DataUser";
import DataKriteria from "./pages/DataKriteria";
import DataSub from "./pages/DataSub";
import DataAlternatif from "./pages/DataAlternatif";
import Proses from "./pages/Proses";
import LoginPage from "./pages/LoginPage";
import UserOutputPage from "./pages/UserOutputPage";

import { AuthProvider, useAuth } from "./context/AuthContext";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  if (!isAuthenticated) return <Navigate to="/login" state={{ from: location }} replace />;
  return <>{children}</>;
};

const AdminLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar />
      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<DashboardContent />} />
          <Route path="/data-user" element={<DataUser />} />
          <Route path="/data-kriteria" element={<DataKriteria />} />
          <Route path="/data-sub" element={<DataSub />} />
          <Route path="/data-alternatif" element={<DataAlternatif />} />
          <Route path="/proses" element={<Proses />} />
        </Routes>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/user-output"
          element={
            <ProtectedRoute>
              <UserOutputPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default App;
