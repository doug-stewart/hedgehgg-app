import { useQuery } from "@tanstack/react-query";
import type { Services } from "../types";

export const useServices = () => {
  const response = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const response = await fetch("/data/services.json");
      const data = await response.json();
      return data as Services;
    },
    staleTime: Infinity,
  });

  return {
    services: response.data,
    isLoading: response.isLoading,
  };
};
