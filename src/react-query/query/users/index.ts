import { useQuery } from "@tanstack/react-query";
import { getSingleUser, getUsers } from "../../../supabase/users";
import { useUsersQueryKeys } from "./useUsersQueryKeys";

export const useGetUsers = () => {
  const { LIST } = useUsersQueryKeys();
  return useQuery({
    queryKey: [LIST],
    queryFn: getUsers,
  });
};
export const useGetUserById = (id: string) => {
  const { ONEUSER } = useUsersQueryKeys();
  return useQuery({
    queryKey: [ONEUSER],
    queryFn: () => getSingleUser(id),
  });
};
