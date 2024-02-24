import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import FormInput from "@/components/ui/FormInput";
import { useAuth } from "@/lib/hooks/useAuth";

export const signupFormSchema = z.object({
  username: z.string().min(2, "This Field is Required").trim(),
  email: z
    .string()
    .min(2, "This Field is Required")
    .email("Enter a valid Email")
    .trim(),
  password: z.string().min(6, "Enter a valid password").trim(),
});

const SignUpForm = () => {
  const { signup, signupLoading } = useAuth();
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (value: z.infer<typeof signupFormSchema>) => {
    form.reset();
    signup(value);
  };

  return (
    <div className="flex-1 px-0 lg:px-10 ">
      <img src="/logo.png" width={170} alt="Level Letter Logo" />
      <div className="max-w-md mx-auto space-y-8 h-full flex flex-col justify-center">
        <div className="space-y-2">
          <h1 className="text-2xl lg:text-3xl font-semibold">Sign up</h1>
          <p className=" font-medium text-sm lg:text-base text-slate-800">
            Enter your details to create your account
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormInput
              form={form}
              label="Username"
              name="username"
              placeholder="Enter a username"
            />
            <FormInput
              form={form}
              label="Email"
              name="email"
              placeholder="Enter a email"
            />
            <FormInput
              form={form}
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
            />

            <Button className="w-full" type="submit">
              {signupLoading ? (
                <span className="flex items-center gap-2">
                  Loading
                  <motion.span
                    initial="hidden"
                    animate={signupLoading ? "animate" : "hidden"}
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
          Already have an account?{" "}
          <Link className="text-primary  font-semibold" to={"/login"}>
            Login Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
