import axios from "axios";
export const API = axios.create({
  // baseURL: "https://lingobackend.vercel.app",
  baseURL: "https://longobackend.vercel.app",
  // baseURL: "http://localhost:5000",
  withCredentials: true,
});

export const Path = "https://lingo-silk-nine.vercel.app";
// export const Path = "http://localhost:3000";
// export const ApiClint = axios.create({
//   baseURL: HOST,
//   withCredentials: true,
// });
