import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../../supabase/users";

export const useGetUsers = () => {
  return useQuery({
    queryKey: ["users-list"],
    queryFn: getUsers,
  });
};
