import { useQuery } from "@tanstack/react-query";
import z from "zod";
import { apiFetch } from "@/api/helpers/apiFetch";

export const useFeatureFlags = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["feature-flags"],
    queryFn: async () => {
      const response = await apiFetch("/feature-flags");
      const data = await response.json();
      const parsed = z
        .object({
          ENABLE_REGISTRATION: z.boolean(),
        })
        .safeParse(data);

      if (!parsed.success) {
        throw new Error("Invalid feature flags response");
      }
      return parsed.data;
    },
    staleTime: Infinity,
  });
  return { featureFlags: data, isLoading };
};
