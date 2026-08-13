import api from "../api/axiosInstance";

export function loginUser(data) {
  return api.post("/api/auth/login", data);
}