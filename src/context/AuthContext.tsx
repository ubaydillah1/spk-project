// src/context/AuthContext.tsx
import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  userId: string;
  role: string;
  login: (id: string, role: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState("");
  const [role, setRole] = useState("");

  const login = (id: string, role: string) => {
    setIsAuthenticated(true);
    setUserId(id);
    setRole(role);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserId("");
    setRole("");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userId, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
