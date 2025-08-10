import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chatty-back.vercel.app/" : "/api",
  withCredentials: true,
});

// http://localhost:5003/api