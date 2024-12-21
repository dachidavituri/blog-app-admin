import { useQuery } from "@tanstack/react-query";
import { getBlogById, getBlogs } from "../../../supabase/blogs";
import { useBlogQueryKeys } from "./useBlogsQueryKeys";

export const useGetBlogs = () => {
  const {LIST} = useBlogQueryKeys()
  return useQuery({
    queryKey: [LIST],
    queryFn: getBlogs,
  });
};
export const useGetBlogsById = (id: string) => {
  const {ONEBLOG} = useBlogQueryKeys()
  return useQuery({
    queryKey: [ONEBLOG],
    queryFn: () => getBlogById(id),
  });
};
