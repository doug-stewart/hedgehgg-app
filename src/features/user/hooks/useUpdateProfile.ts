import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile } from "../api/updateProfile";

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: (data) => {
      if (data?.id) {
        queryClient.invalidateQueries({ queryKey: ["user", data.id] });
      } else {
        queryClient.invalidateQueries({ queryKey: ["user"] });
      }
    },
  });
  return mutation;
};
