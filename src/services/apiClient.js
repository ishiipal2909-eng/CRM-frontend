const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

function parseFrappeErrorMessage(data) {
  if (!data) return "API Request Failed";

  if (typeof data.message === "string" && data.message.length > 0) {
    return data.message;
  }

  if (data._server_messages) {
    try {
      const serverMsgs = typeof data._server_messages === "string"
        ? JSON.parse(data._server_messages)
        : data._server_messages;

      if (Array.isArray(serverMsgs) && serverMsgs.length > 0) {
        const firstMsg = typeof serverMsgs[0] === "string"
          ? JSON.parse(serverMsgs[0])
          : serverMsgs[0];

        if (firstMsg && firstMsg.message) {
          return firstMsg.message;
        }
      }
    } catch (e) {
      // fallback if JSON parsing fails
    }
  }

  if (data.exception) {
    const parts = data.exception.split(":");
    return parts[parts.length - 1].trim();
  }

  return "API Request Failed";
}

export async function apiRequest(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`;

  const defaultHeaders = {
    "Content-Type": "application/json",
    "Accept": "application/json",
  };

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
    credentials: "include",
  };

  if (options.body && typeof options.body === "object") {
    config.body = JSON.stringify(options.body);
  }

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      const cleanMessage = parseFrappeErrorMessage(data);
      throw new Error(cleanMessage);
    }

    return data;
  } catch (error) {
    console.error(`API Error [${endpoint}]:`, error);
    throw error;
  }
}