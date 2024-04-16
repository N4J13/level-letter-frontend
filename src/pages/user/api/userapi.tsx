// import { axiosInstance } from "@/lib/axios";
// import { customListType } from "@/types";

// // Custom list API

// export const getCustomList = async () => {
//   const response = await axiosInstance.get("game_process/get_custom_list",
//   {
//     headers: {
//       Authorization: localStorage.getItem("token"),
//     },
  
//   });
//   return response.data;
// };

// export const addCustomList = async (data: customListType) => {
//   const response = await axiosInstance.post("/add_custom_list", data);
//   return response.data;
// };

// export const deleteCustomList = async (id: string) => {
//   const response = await axiosInstance.delete(`/delete_custom_list/${id}`);
//   return response.data;
// };

// export const updateCustomList = async (id: string, data: customListType) => {
//   const response = await axiosInstance.put(`/update_custom_list/${id}`, data);
//   return response.data;
// };

// export const getCustomListById = async (id: string) => {
//   const response = await axiosInstance.get(`/get_custom_list/${id}`);
//   return response.data;
// };

// // Favioite list API

// export const getFavoriteList = async () => {
//   const response = await axiosInstance.get("/get_fav");
//   return response.data;
// };

// export const addFavoriteList = async (data: { gameId: string }) => {
//   const response = await axiosInstance.post("/add_to_fav", data);
//   return response.data;
// };
