import { useMutation } from "@tanstack/react-query";
import { createBlog, updateBlog } from "../../../supabase/blogs";
import { Blog } from "../../../supabase/blogs/index.types";
import { useBlogsMutationKeys } from "./useBlogsMutationKeys";

export const useUpdateBlog = (id: string) => {
  const { UPDATE } = useBlogsMutationKeys();
  return useMutation({
    mutationKey: [UPDATE],
    mutationFn: (payload: Partial<Blog>) => updateBlog(id, payload),
  });
};
export const useCreateBlog = () => {
  const { CREATE } = useBlogsMutationKeys();
  return useMutation({
    mutationKey: [CREATE],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutationFn: (variables: { payload: any; user: any }) =>
      createBlog(variables),
  });
};
