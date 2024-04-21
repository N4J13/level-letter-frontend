import { useMutation, useQuery } from "react-query";
import { client } from "../config/apiConfig";

type UseServerApiProps = {
  key: string | unknown[];
  url: string;
  queryParams?: Record<string, unknown>;
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

export const usePost = ({ key, url, queryParams }: UseServerApiProps) => {
  return useMutation({
    mutationKey: key,
    mutationFn: (data: unknown) =>
      client.post(url, data, {
        params: queryParams,
      }),
  });
};

export const usePut = ({ key, url, queryParams }: UseServerApiProps) => {
  return useMutation({
    mutationKey: key,
    mutationFn: async (data) =>
      client.put(url, data, {
        params: queryParams,
      }),
  });
};

export const useDelete = ({
  key,
  url,
  queryParams,
}: Omit<UseServerApiProps, "data">) => {
  return useMutation({
    mutationKey: key,
    mutationFn: () =>
      client
        .delete(url, {
          params: queryParams,
        })
        .then((res) => res.data),
  });
};
