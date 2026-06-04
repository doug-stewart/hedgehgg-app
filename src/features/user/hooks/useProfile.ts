import { useQuery } from "@tanstack/react-query";
import { useSession } from "../../auth/hooks/useSession";
import { getProfile } from "../api/getProfile";
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
    queryFn: async () => getProfile(user.id),
    staleTime: Infinity,
    enabled: isLoggedIn,
  });

  return {
    profile: userQuery.data ?? null,
    isLoading: userQuery.isLoading,
    query: userQuery,
  };
};
