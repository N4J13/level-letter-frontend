import { useMutation, useQuery } from "react-query";
import { client } from "../config/apiConfig";

type UseServerApiProps = {
  key: string | unknown[];
  url: string;
  queryParams?: Record<string, unknown>;
  data: Record<string, unknown>;
};

const token = localStorage.getItem("token");

export const useGet = ({
  key,
  url,
  queryParams,
}: Omit<UseServerApiProps, "data">) => {
  return useQuery({
    queryKey: key,
    queryFn: () =>
      client
        .get(url, {
          params: queryParams,
          headers: {
            Authorization: token,
          },
        })
        .then((res) => res.data),
  });
};

export const usePost = async ({ key, url, queryParams }: UseServerApiProps) => {
  return useMutation({
    mutationKey: key,
    mutationFn: async (data) =>
      client
        .post(url, data, {
          params: queryParams,
        })
        .then((res) => res.data),
  });
};

export const usePut = async ({ key, url, queryParams }: UseServerApiProps) => {
  return useMutation({
    mutationKey: key,
    mutationFn: async (data) =>
      client
        .put(url, data, {
          params: queryParams,
        })
        .then((res) => res.data),
  });
};

export const useDelete = async ({
  key,
  url,
  queryParams,
}: Omit<UseServerApiProps, "data">) => {
  return useMutation({
    mutationKey: key,
    mutationFn: async () =>
      client
        .delete(url, {
          params: queryParams,
        })
        .then((res) => res.data),
  });
};
