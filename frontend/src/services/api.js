// services/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = token;
  return req;
});

export const registerUser = (data) => API.post("/register", data);
export const loginUser = (data) => API.post("/login", data);
export const getDoctors = () => API.get("/users/doctor");
export const bookAppointment = (data) => API.post("/appointment/book", data);
export const getAppointments = () =>
  API.get("/appointment", {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
export const cancelAppointment = (id) => API.delete(`/appointment/cancel/${id}`);
export const getUsersByRole = (role) =>API.get(`/users/${role}`);