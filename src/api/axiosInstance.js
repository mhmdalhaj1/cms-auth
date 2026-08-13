import axios from "axios";

const api = axios.create({
  baseURL: "http://estarta-cms.runasp.net",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;