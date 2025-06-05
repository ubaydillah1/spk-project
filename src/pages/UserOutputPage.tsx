// src/pages/UserOutputPage.tsx
import React from "react";
import { useAuth } from "../context/AuthContext";

const UserOutputPage: React.FC = () => {
  const { userId } = useAuth();

  return (
    <div className="p-6 bg-gray-800 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Data Output Pengguna</h1>
      <p>ID Pengguna: {userId}</p>
      <p>Selamat datang! Ini adalah halaman khusus untuk user.</p>
      {/* Tambahkan data lainnya sesuai kebutuhan */}
    </div>
  );
};

export default UserOutputPage;
