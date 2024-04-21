import {
  useDelete,
  useGet,
  usePost,
  usePut
} from "../utils/apiRequest";

export const useCustomList = () => {
  return useGet({
    key: "customList",
    url: "/game_process/custom_list",
  });
};

export const useCustomListById = (id: string) => {
  return useGet({
    key: ["customList", id],
    url: `/game_process/custom_list/${id}`,
  });
};

export const useCreateCustomList = () => {
  return usePost({
    key: "customList",
    url: "/game_process/custom_list",
  });
};

export const useUpdateCustomList = (
  id: string,
) => {
  return usePut({
    key: ["customList", id],
    url: `/game_process/custom_list/${id}`,
  });
};

export const useDeleteCustomList = (id: string) => {
  return useDelete({
    key: ["customList", id],
    url: `/custom-list/${id}`,
  });
};
