import { BACKEND_API } from "../../../config";
import type { User } from "../types";

export const updateProfile = (profile: NonNullable<User>): Promise<User> =>
  fetch(`${BACKEND_API}/profile/${profile.id}`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profile),
  }).then((response) => response.json());
