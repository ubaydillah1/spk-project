// src/pages/LoginPage.tsx
import React, { useState } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.tsx";


const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({ id: "", email: "", password: "" });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const role = formData.email === "admin@example.com" ? "admin" : "user";
    login(formData.id, role);

    if (role === "admin") {
      navigate("/dashboard");
    } else {
      navigate("/user-output");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form fade-in" onSubmit={handleSubmit}>
        <h2 className="title">Login</h2>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};


export default LoginPage;
