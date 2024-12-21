import { useMutation } from "@tanstack/react-query";
import { login, logout } from "../../../supabase/auth";
import { useAuthMutationKeys } from "./useAuthMutationKeys";

export const useLogin = () => {
  const { LOGIN } = useAuthMutationKeys();
  return useMutation({
    mutationKey: [LOGIN],
    mutationFn: login,
  });
};
export const useLogOut = () => {
  const { LOGOUT } = useAuthMutationKeys();
  return useMutation({
    mutationKey: [LOGOUT],
    mutationFn: logout,
  });
};
