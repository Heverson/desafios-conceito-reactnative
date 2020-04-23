import axios from "axios";

const api = axios.create({
  baseURL: "http://169.254.25.86:3333",
});

export default api;
