import { supabase } from "./supabase";

export const fetchDataList = async () => {
  const todoItems = await supabase.from("karbo").select("*");
  return todoItems.data;
};

export const addDataItem = async (data) => {
  await supabase.from("karbo").insert(data);
};

export const deleteDataItem = async (id) => {
  await supabase.from("karbo").delete().eq("id", id);
};
