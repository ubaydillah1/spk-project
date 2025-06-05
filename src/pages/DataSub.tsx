import React, { useState } from "react";
import "../styles/DataSub.css"; // gunakan CSS yang disesuaikan

const DataSub: React.FC = () => {
  const [formData, setFormData] = useState({
    id: "",
    nama: "",
    nilai: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Sub Kriteria Ditambahkan:\nID: ${formData.id}\nNama: ${formData.nama}\nNilai: ${formData.nilai}`);
    setFormData({ id: "", nama: "", nilai: "" });
  };

  return (
    <div className="subkriteria-container">
      <div className="subkriteria-form fade-in">
        <h1 className="title">Tambah Sub Kriteria</h1>
        <form onSubmit={handleSubmit}>
          <label>ID Sub Kriteria</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />

          <label>Nama Sub Kriteria</label>
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            required
          />

          <label>Nilai Sub Kriteria</label>
          <input
            type="number"
            name="nilai"
            value={formData.nilai}
            onChange={handleChange}
            required
            step="0.01"
            min="0"
          />

          <button type="submit">Simpan</button>
        </form>
      </div>
    </div>
  );
};

export default DataSub;
