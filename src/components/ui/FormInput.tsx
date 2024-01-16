import React, { useState } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { Button } from "./button";
import { CodiconEye, CodiconEyeClosed } from "../icons";

type FormInputProps = {
  label: string;
  name: string;
  placeholder: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any;
  type?: "text" | "password" | "email" | "number";
};

const FormInput: React.FC<FormInputProps> = ({
  form,
  label,
  type = "text",
  name,
  placeholder,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <FormControl>
            <div className="relative">
              <Input
                id={name}
                type={
                  type === "password"
                    ? isPasswordVisible
                      ? "text"
                      : "password"
                    : type
                }
                autoComplete={type === "password" ? "off" : "on"}
                className={`pr-10 ${
                  form.formState.errors.email && "border-red-500"
                }`}
                placeholder={placeholder}
                {...field}
              />
              {type === "password" && (
                <Button
                  type="button"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  className="absolute  right-2 top-2/4 transform -translate-y-2/4"
                  size={"icon"}
                  variant={"ghost"}
                >
                  {isPasswordVisible ? <CodiconEyeClosed /> : <CodiconEye />}
                </Button>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
