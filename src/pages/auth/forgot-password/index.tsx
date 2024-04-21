import { useForgotPasswordRequest } from "@/api/services/authService";
import FormInput from "@/components/ui/FormInput";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Loader2 } from "lucide-react";
import { Form } from "@/components/ui/form";
import { forgotPasswordFormSchema } from "@/types";



const ForgotPassword = () => {
  const { mutate, isLoading } = useForgotPasswordRequest();

  const form = useForm<z.infer<typeof forgotPasswordFormSchema>>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (value: z.infer<typeof forgotPasswordFormSchema>) => {
    mutate(value);
  };

  return (
    <>
      <div className="space-y-2">
        <h1 className="text-2xl  lg:text-3xl font-semibold">Forgot Your Password ?</h1>
        <p className=" font-medium text-sm lg:text-base text-slate-800">
          Enter your email below and we'll send you a reset link
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

export default ForgotPassword;
