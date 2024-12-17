import { supabase } from "..";
import { User } from "./index.types";

export const getUsers = async () => {
  return supabase.auth.admin.listUsers().then((res) => {
    return res.data.users as User[];
  });
};
