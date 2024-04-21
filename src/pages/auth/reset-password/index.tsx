import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useResetPassword } from "@/api/services/authService";
import { Form } from "@/components/ui/form";
import FormInput from "@/components/ui/FormInput";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { Navigate } from "react-router-dom";
import { resetPasswordSchema } from "@/types";

const ResetPassword = () => {
  const { mutate, isLoading} = useResetPassword();
  const { toast } = useToast();
  const token = new URLSearchParams(window.location.search).get("token");
  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (value: z.infer<typeof resetPasswordSchema>) => {
    if (value.password !== value.confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please ensure that the passwords match",
      });
      return;
    }
    mutate({
      password: value.password,
      token: token,
    }, {
      onSuccess: () => {
        toast({
          title: "Password Reset Successful",
          description: "You can now login with your new password",
        });
      },
      onError: () => {
        toast({
          title: "An error occurred",
          description: "Please try again later",
        });
      },
    });
  };

  if (!token) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <div className="space-y-2">
        <h1 className="text-2xl  lg:text-3xl font-semibold">
          Reset Your Password
        </h1>
        <p className=" font-medium text-sm lg:text-base text-slate-800">
          Enter your new password below
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormInput
            form={form}
            label="New Password"
            name="password"
            type="password"
            placeholder="Enter your new password"
          />
          <FormInput
            form={form}
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
          />
          <Button className="w-full" type="submit">
            {isLoading ? (
              <span className="flex items-center gap-2">
                Loading
                <motion.span
                  initial="hidden"
                  animate={isLoading ? "animate" : "hidden"}
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
    </>
  );
};

export default ResetPassword;
