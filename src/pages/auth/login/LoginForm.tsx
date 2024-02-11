import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useMutation } from "react-query";
import { axiosInstance } from "@/lib/axios";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import FormInput from "@/components/ui/FormInput";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import { useEffect } from "react";

const loginFormSchema = z.object({
  email: z
    .string()
    .min(2, "This Field is Required")
    .email("Enter a valid Email")
    .trim(),
  password: z.string().min(4, "Enter a valid password").trim(),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [token] = useLocalStorage("token", "");

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [navigate, token]);

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

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
        localStorage.setItem("userId", value.data.userId);
        setTimeout(() => {
          navigate("/");
        }, 100);
      }
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
      });
    },
  });

  const onSubmit = (value: z.infer<typeof loginFormSchema>) => {
    loginMutaion.mutate(value);
  };

  return (
    <div className="flex-1 px-0 lg:px-10 ">
      <img src="/logo.png" width={170} alt="Level Letter Logo" />
      <div className="max-w-md mx-auto space-y-8 h-full flex flex-col justify-center">
        <div className="space-y-2">
          <h1 className="text-2xl  lg:text-3xl font-semibold">Welcome Back,</h1>
          <p className=" font-medium text-sm lg:text-base text-slate-800">
            Enter your details to access your account
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormInput
              form={form}
              label="Email"
              name="email"
              placeholder="Enter your Email"
            />
            <FormInput
              form={form}
              label="Password"
              name="password"
              placeholder="Enter your Password"
              type="password"
            />
            <div className="flex -mt-5 justify-end w-full">
              <Link
                to={"/forgot-password"}
                className="text-primary text-sm font-semibold"
              >
                Forgot Password?
              </Link>
            </div>
            <Button className="w-full" type="submit">
              {loginMutaion.isLoading ? (
                <span className="flex items-center gap-2">
                  Loading
                  <motion.span
                    initial="hidden"
                    animate={loginMutaion.isLoading ? "animate" : "hidden"}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: -10,
                      },
                      animate: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          bounce: 0.5,
                        },
                      },
                    }}
                  >
                    <Loader2 size={18} className="animate-spin" />
                  </motion.span>
                </span>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>
        <div className="text-center text-sm">
          Don't have an account?{" "}
          <Link className="text-primary  font-semibold" to={"/signup"}>
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
