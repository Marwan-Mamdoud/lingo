import axios from "axios";
export const API = axios.create({
  baseURL: "https://lingobackend.vercel.app",
  withCredentials: true,
});

export const Path = "https://lingo-silk-nine.vercel.app";
// export const ApiClint = axios.create({
//   baseURL: HOST,
//   withCredentials: true,
// });
