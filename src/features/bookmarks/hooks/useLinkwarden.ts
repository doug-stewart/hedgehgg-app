import { useQuery } from "@tanstack/react-query";
import { BACKEND_API } from "../../../config";
import type { Bookmarks } from "../types";

export const useLinkwarden = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["bookmarks"],
    queryFn: async () => {
      const response = await fetch(`${BACKEND_API}/linkwarden/all`);
      const data = await response.json();
      return data as Bookmarks;
    },
    staleTime: Infinity,
  });

  return {
    bookmarks: data,
    isLoading,
  };
};
