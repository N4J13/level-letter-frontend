import { useGet, usePost } from "../utils/apiRequest";

export const useLogin = (data: Record<string, string>) => {
  return usePost({
    key: "login",
    url: "/user/login",
    data: data,
  });
};

export const useRegister = (data: Record<string, string>) => {
  return usePost({
    key: "register",
    url: "/user/register",
    data: data,
  });
};

export const useLogout = () => {
  return useGet({
    key: "logout",
    url: "/user/logout",
  });
};

export const useProfile = () => {
  return useGet({
    key: "profile",
    url: "/user/profile",
  });
};
