import { useGet, usePost } from "../utils/apiRequest";

export const useLogin = () => {
  return usePost({
    key: "login",
    url: "/auth/login",
  });
};

export const useRegister = () => {
  return usePost({
    key: "register",
    url: "/auth/register",
  });
};

export const useLogout = () => {
  return useGet({
    key: "logout",
    url: "/auth/logout",
  });
};

export const useProfile = () => {
  return useGet({
    key: "profile",
    url: "/auth/profile",
  });
};

export const useForgotPasswordRequest = () => {
  return usePost({
    key: "forgotPasswordRequest",
    url: "/auth/request_password_reset",
  });
}

export const useResetPassword = () => {
  return usePost({
    key: "resetPassword",
    url: "/auth/reset_password",
  });
}
