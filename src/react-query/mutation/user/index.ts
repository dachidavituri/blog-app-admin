import { useMutation } from "@tanstack/react-query";
import { createUser, updateUser } from "../../../supabase/users";
import { useUsersMutationKeys } from "./useUsersMutationKeys";

export const useUpdateUser = (id: string) => {
  const { UPDATE } = useUsersMutationKeys();
  return useMutation({
    mutationKey: [UPDATE],
    mutationFn: (payload: { email: string; phone: string }) =>
      updateUser(id, payload),
  });
};
export const useCreateUser = () => {
  const { CREATE } = useUsersMutationKeys();
  return useMutation({
    mutationKey: [CREATE],
    mutationFn: createUser,
  });
};
