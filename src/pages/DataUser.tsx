import React, { useState } from "react";
import "../styles/DataUserForm.css"; // Pastikan file ini mengandung tema dark elegan

const DataUseForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    noHp: "",
    alamat: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Data Terkirim:\nNama: ${formData.nama}\nEmail: ${formData.email}\nNo HP: ${formData.noHp}\nAlamat: ${formData.alamat}`);
    setFormData({ nama: "", email: "", noHp: "", alamat: "" });
  };

  return (
    <div className="subkriteria-container">
      <div className="subkriteria-form fade-in">
        <h1 className="title">Data user baru</h1>
        <form onSubmit={handleSubmit}>
          <label>Nama</label>
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>No HP</label>
          <input
            type="tel"
            name="noHp"
            value={formData.noHp}
            onChange={handleChange}
            required
          />

          <label>Alamat</label>
          <input
            type="text"
            name="alamat"
            value={formData.alamat}
            onChange={handleChange}
            required
          />

          <button type="submit">Simpan</button>
        </form>
      </div>
    </div>
  );
};

export default DataUseForm;
