import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/api/helpers/apiFetch";
import { useSession } from "@/features/auth/hooks/useSession";
import { useProfile } from "@/features/user/hooks/useProfile";
import type { LinkwardenLink } from "../types";

export const usePinnedLinks = () => {
  const { session, isLoggedIn } = useSession();
  const { profile } = useProfile();
  const hasLinkwarden = Object.hasOwn(profile || {}, "linkwarden_token");

  const query = useQuery({
    queryKey: ["user", session?.id, "pinned"],
    queryFn: async () => {
      const response = await apiFetch("/linkwarden/pinned");
      const data = await response.json();
      return data as Error | Array<LinkwardenLink>;
    },
    staleTime: Infinity,
    enabled: isLoggedIn && hasLinkwarden,
  });

  const pinned = (query.data instanceof Error || query.data === undefined ? [] : query.data).sort(
    (a, b) => a.name.localeCompare(b.name),
  );

  return {
    pinned,
    isLoading: query.isLoading,
    isSuccess: query.isSuccess,
  };
};
