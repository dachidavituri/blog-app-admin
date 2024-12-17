import { supabase } from "..";
import { Blog } from "./index.types";

export const getBlogs = async () => {
  const { data } = await supabase.from("blogs").select();
  return data as Blog[];
};

