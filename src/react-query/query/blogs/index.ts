import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../../../supabase/blogs";

export const useGetBlogs = () => {
  return useQuery({
    queryKey: ["blogs-list"],
    queryFn: getBlogs,
  });
};
