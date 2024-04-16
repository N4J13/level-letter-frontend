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

export const useCreateCustomList = (data: Record<string, unknown>) => {
  return usePost({
    key: "customList",
    url: "/game_process/custom_list",
    data: data,
  });
};

export const useUpdateCustomList = (
  id: string,
  data: Record<string, unknown>
) => {
  return usePut({
    key: ["customList", id],
    url: `/game_process/custom_list/${id}`,
    data: data,
  });
};

export const useDeleteCustomList = (id: string) => {
  return useDelete({
    key: ["customList", id],
    url: `/custom-list/${id}`,
  });
};
