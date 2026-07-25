import { BACKEND_API } from "@/config";

export const apiFetch = (path: string, options?: RequestInit | null, includeCredentials = true) => {
  const opts = Object.assign({}, options, includeCredentials ? { credentials: "include" } : null);
  return fetch(`${BACKEND_API}/api${path}`, opts);
};
