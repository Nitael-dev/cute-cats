import axios from "axios";

export const api = () => {
  const token = JSON.parse(localStorage.getItem("jwt_access_token") || "");
  const _axios = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return _axios;
};
