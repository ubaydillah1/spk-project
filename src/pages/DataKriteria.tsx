import React, { useState } from "react";
import "../styles/DataKriteria.css";

const DataKriteria: React.FC = () => {
  const [formData, setFormData] = useState({
    id: "",
    nama: "",
    bobot: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Kriteria Ditambahkan:\nID: ${formData.id}\nNama: ${formData.nama}\nBobot: ${formData.bobot}`);
    setFormData({ id: "", nama: "", bobot: "" });
  };

  return (
    <div className="kriteria-container">
      <div className="kriteria-form fade-in">
        <h1 className="title">Tambah Kriteria Baru</h1>
        <form onSubmit={handleSubmit}>
          <label>ID Kriteria</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />

          <label>Nama Kriteria</label>
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            required
          />

          <label>Bobot Kriteria</label>
          <input
            type="number"
            name="bobot"
            value={formData.bobot}
            onChange={handleChange}
            required
            step="0.01"
            min="0"
            max="1"
          />

          <button type="submit">Simpan</button>
        </form>
      </div>
    </div>
  );
};

export default DataKriteria;
