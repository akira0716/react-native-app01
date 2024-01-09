import { supabase } from "./supabase";

export const fetchDataList = async () => {
  const todoItems = await supabase.from("table_app01").select("*");
  return todoItems.data;
};

export const addDataItem = async (data) => {
  await supabase.from("table_app01").insert(data);
};

export const deleteDataItem = async (id) => {
  await supabase.from("table_app01").delete().eq("id", id);
};

// export const checkTodoItem = async (id, status) => {
//   await supabase.from("table_app01").update({ status: !status }).eq("id", id);
// };
