import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3003/api",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

if (typeof window !== "undefined") {
  const token = localStorage.getItem("planify_token");
  if (token) api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default api;
