import { apiRequest } from "./apiClient";

export async function quickCreateLead(leadData) {
  return await apiRequest("/api/method/crm_saas.api.leads.quick_create", {
    method: "POST",
    body: leadData,
  });
}

export async function fetchLeads() {
  const res = await apiRequest('/api/resource/CRM Lead?fields=["*"]');
  return res.data;
}

export async function fetchContacts() {
  const res = await apiRequest('/api/resource/CRM Contact?fields=["*"]');
  return res.data;
}

export async function fetchOrganizations() {
  const res = await apiRequest('/api/resource/CRM Organization?fields=["*"]');
  return res.data;
}