import { BACKEND_API } from "@/config";

export const apiFetch = (
  path: string,
  options?: RequestInit | null,
  includeCredentials?: boolean,
) => {
  return fetch(
    `${BACKEND_API}/api${path}`,
    Object.assign({}, options, includeCredentials ? { credentials: "include" } : null),
  );
};
