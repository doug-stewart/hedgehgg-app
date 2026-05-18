import { useQuery } from "@tanstack/react-query";
import { BACKEND_API } from "../config";
import type { Episodes } from "../types";

export const useSonarr = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["sonarr"],
    queryFn: async () => {
      const response = await fetch(`${BACKEND_API}/sonarr/upcoming`);
      const data = await response.json();
      return data as Episodes;
    },
    staleTime: Infinity,
  });
  return { upcoming: data, isLoading };
};
