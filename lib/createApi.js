import axios from "axios";
export const API = axios.create({
  baseURL: "https://lingobackend.vercel.app",
  withCredentials: true,
});

export const Path = "http://localhost:3000";
// export const ApiClint = axios.create({
//   baseURL: HOST,
//   withCredentials: true,
// });
