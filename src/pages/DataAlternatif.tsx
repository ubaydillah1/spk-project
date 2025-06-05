import React, { useState } from "react";
import "../styles/DataAlternatif.css"; // menggunakan CSS yang sama

const DataAlternatif: React.FC = () => {
  const [formData, setFormData] = useState({
    idAlternatif: "",
    namaAlternatif: "",
    merek: "",
    tahun: "",
    harga: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Data Alternatif Ditambahkan:\nID Alternatif: ${formData.idAlternatif}\nNama Alternatif: ${formData.namaAlternatif}\nMerek: ${formData.merek}\nTahun: ${formData.tahun}\nHarga: ${formData.harga}`
    );
    setFormData({
      idAlternatif: "",
      namaAlternatif: "",
      merek: "",
      tahun: "",
      harga: "",
    });
  };

  return (
    <div className="subkriteria-container">
      <div className="subkriteria-form fade-in">
        <h1 className="title">Data Alternatif</h1>
        <form onSubmit={handleSubmit}>
          <label>ID Alternatif</label>
          <input
            type="text"
            name="idAlternatif"
            value={formData.idAlternatif}
            onChange={handleChange}
            required
          />

          <label>Nama Alternatif</label>
          <input
            type="text"
            name="namaAlternatif"
            value={formData.namaAlternatif}
            onChange={handleChange}
            required
          />

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

          <button type="submit">Simpan</button>
        </form>
      </div>
    </div>
  );
};

export default DataAlternatif;
