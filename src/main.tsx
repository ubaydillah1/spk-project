import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App.tsx";
import AboutPage from "./pages/About.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="*"
          element={
            <div className="h-screen flex justify-center items-center text-[100px] font-bold">
              Not Found
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
