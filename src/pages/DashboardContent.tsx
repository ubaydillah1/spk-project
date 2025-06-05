import React from "react";
import "../styles/DashboardContent.css"; 

const DashboardContent: React.FC = () => {
  return (
    <div className="welcome-container">
      <div className="overlay">
        <div className="content">
          <h1 className="title">Selamat Datang di SPK Pemilihan Mobil Terbaik</h1>
          <p className="description">
            Temukan mobil impian Anda dengan sistem pendukung keputusan cerdas.
          </p>
          <button
            onClick={() => alert("Menuju halaman dashboard")}
            className="start-button"
          >
            Mulai Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
