import React, { useState } from "react";
import "../styles/Proses.css"; // CSS tema sama, tapi file terpisah

const Proses: React.FC = () => {
  const [formData, setFormData] = useState({
    merek: "",
    tahun: "",
    harga: "",
    interior: "",
    exterior: "",
    warna: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Proses Kriteria Konsumen:\nMerek: ${formData.merek}\nTahun: ${formData.tahun}\nHarga: ${formData.harga}\nInterior: ${formData.interior}\nExterior: ${formData.exterior}\nWarna: ${formData.warna}`
    );
    setFormData({
      merek: "",
      tahun: "",
      harga: "",
      interior: "",
      exterior: "",
      warna: "",
    });
  };

  return (
    <div className="proses-container">
      <div className="proses-form fade-in">
        <h1 className="title">Kriteria Konsumen</h1>
        <form onSubmit={handleSubmit}>
          <label>Merek</label>
          <input
            type="text"
            name="merek"
            value={formData.merek}
            onChange={handleChange}
            required
          />

          <label>Tahun</label>
          <input
            type="number"
            name="tahun"
            value={formData.tahun}
            onChange={handleChange}
            required
            min="1900"
            max={new Date().getFullYear()}
          />

          <label>Harga</label>
          <input
            type="number"
            name="harga"
            value={formData.harga}
            onChange={handleChange}
            required
            min="0"
            step="1000"
          />

          <label>Interior</label>
          <input
            type="text"
            name="interior"
            value={formData.interior}
            onChange={handleChange}
            required
          />

          <label>Exterior</label>
          <input
            type="text"
            name="exterior"
            value={formData.exterior}
            onChange={handleChange}
            required
          />

          <label>Warna</label>
          <input
            type="text"
            name="warna"
            value={formData.warna}
            onChange={handleChange}
            required
          />

          <button type="submit">Proses</button>
        </form>
      </div>
    </div>
  );
};

export default Proses;
