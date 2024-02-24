import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FormInput from "@/components/ui/FormInput";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import { useEffect } from "react";
import { useAuth } from "@/lib/hooks/useAuth";

// eslint-disable-next-line react-refresh/only-export-components
export const loginFormSchema = z.object({
  email: z
    .string()
    .min(2, "This Field is Required")
    .email("Enter a valid Email")
    .trim(),
  password: z.string().min(4, "Enter a valid password").trim(),
});

const LoginForm = () => {
  const { login , loginLoading } = useAuth();
  const [token] = useLocalStorage("token", "");
  const navigate = useNavigate();

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

  const onSubmit = (value: z.infer<typeof loginFormSchema>) => {
    login(value);
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
              {loginLoading ? (
                <span className="flex items-center gap-2">
                  Loading
                  <motion.span
                    initial="hidden"
                    animate={loginLoading ? "animate" : "hidden"}
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
