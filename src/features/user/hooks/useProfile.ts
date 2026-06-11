import { useQuery } from "@tanstack/react-query";
import { useSession } from "../../auth/hooks/useSession";
import { getProfile } from "../api/getProfile";
import type { User } from "../types";

type UserStore = {
  profile: User | null;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
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

  const profile = {
    id: user.id,
    linkwarden_token: userQuery.data?.linkwarden_token ?? null,
    linkwarden_url: userQuery.data?.linkwarden_url ?? null,
    sonarr_api_key: userQuery.data?.sonarr_api_key ?? null,
    sonarr_url: userQuery.data?.sonarr_url ?? null,
    geolocation_latitude: userQuery.data?.geolocation_latitude ?? null,
    geolocation_longitude: userQuery.data?.geolocation_longitude ?? null,
  } as User;

  return {
    profile: profile,
    isLoading: userQuery.isLoading,
    isSuccess: userQuery.isSuccess,
    isError: userQuery.isError,
    query: userQuery,
  };
};
