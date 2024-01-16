import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [active, setActive] = useState<boolean>(false);
  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const clickHandler = () => {
    setActive(!active);

    const timeout =  setTimeout(() => {
      setActive(false);
    }, 5000);

    return {

        clearTimeout: () => clearTimeout(timeout)
    };
  };
  return (
    <div className="bg-neutral-100 flex justify-center items-center min-h-screen ">
      <div className="space-y-5">
        <div>{email ? email : "Enter Your Email"}</div>
        <Input
          type="text"
          placeholder="Enter your Email"
          onChange={(e) => handleOnChange(e)}
          className="w-[250px]"
        />
        <Button onClick={clickHandler} className="block w-full" size={"lg"}>
          Hello
        </Button>
        {active && (
          <div>{email ? email : "Type Email please then click me"}</div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
