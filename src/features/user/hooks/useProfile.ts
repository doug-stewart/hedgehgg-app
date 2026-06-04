import { useQuery } from "@tanstack/react-query";
import { BACKEND_API } from "../../../config";
import { useSession } from "../../auth/hooks/useSession";
import type { User } from "../types";

type UserStore = {
  profile: User | null;
  isLoading: boolean;
  query: ReturnType<typeof useQuery>;
};

export const useProfile = (): UserStore => {
  const {
    session: { user },
    isLoggedIn,
  } = useSession();

  const userQuery = useQuery({
    queryKey: ["user", user.id],
    queryFn: async () => {
      const response = await fetch(`${BACKEND_API}/profile/${user.id}`, {
        credentials: "include",
      });
      const data = await response.json();
      return data as User;
    },
    staleTime: Infinity,
    enabled: isLoggedIn,
  });

  return {
    profile: userQuery.data ?? null,
    isLoading: userQuery.isLoading,
    query: userQuery,
  };
};
