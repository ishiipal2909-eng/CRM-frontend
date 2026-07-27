import { apiRequest } from "./apiClient";

export async function findDuplicateCandidates(searchParams) {
  return await apiRequest("/api/method/crm_saas.dedupe.find_candidates", {
    method: "POST",
    body: searchParams,
  });
}

export async function logActivity(activityData) {
  return await apiRequest("/api/method/crm_saas.timeline.log_activity", {
    method: "POST",
    body: activityData,
  });
}

export async function fetchActivityFeed(referenceDoctype, referenceName) {
  return await apiRequest(
    `/api/method/crm_saas.timeline.feed?doctype=${referenceDoctype}&name=${referenceName}`
  );
}