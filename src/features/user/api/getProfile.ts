import { apiFetch } from "@/api/helpers/apiFetch";
import { BACKEND_API } from "@/config";
import type { User } from "../types";

export const getProfile = async () => {
  const response = await apiFetch("/profile");
  const data = await response.json();
  return data as User;
};
