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

export const useGetAllCollectionS = () => {
  return useGet({
    key: "getAllCollection",
    url: "user/collection",
  });
};

export const useGetCollectionById = (id: number) => {
  return useGet({
    key: ["getCollectionById", id],
    url: `/user/collection/${id}`,
  });
};

export const useCreateCollection = () => {
  return usePost({
    key: "createCollection",
    url: "/user/collection",
  });
};

export const useUpdateCollection = () => {
  return usePut({
    key: "updateCollection",
    url: "/user/collection",
  });
};

export const useDeleteCollection = () => {
  return useDelete({
    key: "deleteCollection",
    url: "/user/collection",
  });
}

