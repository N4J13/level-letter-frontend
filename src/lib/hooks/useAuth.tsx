// useAuth.tsx
import { useContext, createContext, useState, useEffect } from "react";
import { axiosInstance } from "../axios";
import { useMutation } from "react-query";
import { loginFormSchema } from "@/pages/auth/login/LoginForm";
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { signupFormSchema } from "@/pages/auth/signup/SignupForm";
import { AxiosError } from "axios";

interface User {
  username: string;
  email: string;
  _id: string;
  friends: string[];
  favGames: string[];
  profile_pic: string;
}

interface AuthContextType {
  user: User | null;
  login: (value: z.infer<typeof loginFormSchema>) => void;
  loginLoading: boolean;
  signup: (value: z.infer<typeof signupFormSchema>) => void;
  signupLoading: boolean;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  const loginMutaion = useMutation({
    mutationKey: "login",
    mutationFn: (data: z.infer<typeof loginFormSchema>) => {
      return axiosInstance.post("/user/login", data);
    },
    onSuccess: (value) => {
      if (value.data.message === "Password Doesnt match") {
        toast({
          title: value.data.message,
          description: "Please try again with a different password.",
        });
      } else if (value.data.message === "User not found") {
        toast({
          title: value.data.message,
          description: "Please try again with a different email.",
        });
      } else if (value.data.message === "Email not verified , Email Sent") {
        toast({
          title: value.data.message,
          description: "Please check your email to verify your account.",
        });
      } else {
        localStorage.setItem("token", value.data.token);
        window.location.pathname = "/";
      }
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
      });
    },
  });

  const signupMutaion = useMutation({
    mutationKey: "signup",
    mutationFn: (data: z.infer<typeof signupFormSchema>) => {
      return axiosInstance.post("/user/signup", data);
    },
    onSuccess: () => {
      toast({
        title: "Email sent",
        description: "Please check your email to verify your account.",
      });
    },
    onError: (error: AxiosError<{ message?: string }>) => {
      if (error?.response?.data?.message === "Username already exists") {
        toast({
          title: error.response.data.message,
          description: "Please try again with a different username.",
        });
      } else if (error?.response?.data?.message === "Email already exists") {
        toast({
          title: error.response.data.message,
          description: "Please try again with a different email.",
        });
      } else {
        toast({
          title: "Something went wrong.",
          description: "Please try again later.",
        });
      }
    },
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoading(true);
      axiosInstance
        .get("user/profile", {
          headers: {
            Authorization: token.replace(/"/g, ""),
          },
        })
        .then((res) => {
          setUser(res.data.data);
          setLoading(false);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  const login = (value: z.infer<typeof loginFormSchema>) => {
    loginMutaion.mutate(value);
  };

  const signup = (value: z.infer<typeof signupFormSchema>) => {
    signupMutaion.mutate(value);
  }

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login", { replace: true});
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        signup,
        loginLoading: loginMutaion.isLoading,
        signupLoading: signupMutaion.isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
