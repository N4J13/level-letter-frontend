import { useDelete, useGet, usePost, usePut } from "../utils/apiRequest";

export const useUpdateMyGames = () => {
  return usePost({
    key: "addToMyGames",
    url: "/user/mygames/update",
  });
};

export const useGetMyGames = (status: string | null) => {
  return useGet({
    key: ["getMyGames", status],
    url: "/user/mygames",
    queryParams: {
      status: status,
    },
  });
};

export const useGetAllLists = () => {
  return useGet({
    key: "getAllUserLists",
    url: "user/lists",
  });
};

export const useGetListsById = (id: number) => {
  return useGet({
    key: ["getListsById", id],
    url: `/user/list/${id}`,
  });
};

export const useCreateLists = () => {
  return usePost({
    key: "createLists",
    url: "/user/list",
  });
};

export const useUpdateLists = () => {
  return usePut({
    key: "updateLists",
    url: "/user/list",
  });
};

export const useDeleteLists = () => {
  return useDelete({
    key: "deleteLists",
    url: "/user/list",
  });
}

