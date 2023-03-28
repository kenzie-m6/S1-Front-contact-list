import axios from "axios";

// const token = localStorage.getItem("@TOKEN");

export const Api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${token}`,
  },
});
