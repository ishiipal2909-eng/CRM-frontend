import { apiRequest } from "./apiClient";

export async function signupUser(formData) {
  return await apiRequest("/api/method/crm_saas.api.auth.signup", {
    method: "POST",
    body: formData,
  });
}

export async function loginUser(usr, pwd) {
  return await apiRequest("/api/method/login", {
    method: "POST",
    body: { usr, pwd },
  });
}

export async function logoutUser() {
  return await apiRequest("/api/method/logout", {
    method: "POST",
  });
}