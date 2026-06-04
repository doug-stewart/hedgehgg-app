import { useQuery } from "@tanstack/react-query";
import { BACKEND_API } from "../../../config";
import { useSession } from "../../auth/hooks/useSession";
import type { Bookmarks } from "../types";

type LinkwardenStore = {
  bookmarks: Bookmarks | [];
  isLoading: boolean;
};

export const useLinkwarden = (): LinkwardenStore => {
  const { session, isLoggedIn } = useSession();
  const { data, isLoading } = useQuery({
    queryKey: ["user", session.session.id, "bookmarks"],
    queryFn: async () => {
      const response = await fetch(`${BACKEND_API}/linkwarden/all`, {
        credentials: "include",
      });
      const data = await response.json();
      return data as Error | Bookmarks;
    },
    staleTime: Infinity,
    enabled: isLoggedIn,
  });

  return {
    bookmarks: data instanceof Error ? [] : (data ?? []),
    isLoading,
  };
};
