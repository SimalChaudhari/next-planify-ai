import React, { createContext, useContext, useState, useEffect } from "react";
import api from "@/lib/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = typeof window !== "undefined" ? localStorage.getItem("planify_token") : null;
    setToken(t || null);
  }, []);

  useEffect(() => {
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      api
        .get("/auth/me")
        .then((res) => {
          if (res.data.status && res.data.user) setUser(res.data.user);
        })
        .catch(() => {
          if (typeof window !== "undefined") localStorage.removeItem("planify_token");
          setToken(null);
          setUser(null);
        })
        .finally(() => setLoading(false));
    } else {
      delete api.defaults.headers.common["Authorization"];
      setUser(null);
      setLoading(false);
    }
  }, [token]);

  const login = async (email, password) => {
    const res = await api.post("/auth/login", { email, password });
    if (res.data.status && res.data.token) {
      localStorage.setItem("planify_token", res.data.token);
      setToken(res.data.token);
      setUser(res.data.user);
      api.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
      return { success: true };
    }
    return { success: false, message: res.data.message };
  };

  const register = async (data) => {
    const res = await api.post("/auth/register", data);
    if (res.data.status && res.data.token) {
      localStorage.setItem("planify_token", res.data.token);
      setToken(res.data.token);
      setUser(res.data.user);
      api.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
      return { success: true };
    }
    return { success: false, message: res.data.message };
  };

  const logout = () => {
    localStorage.removeItem("planify_token");
    setToken(null);
    setUser(null);
    delete api.defaults.headers.common["Authorization"];
  };

  const updateUser = (u) => setUser((prev) => (prev ? { ...prev, ...u } : null));

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
