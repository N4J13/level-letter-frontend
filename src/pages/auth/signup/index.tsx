import AuthContainer from "@/components/AuthContainer";
import SignUpForm from "./SignupForm";

const Signup = () => {
  return (
    <div className="h-svh w-full overflow-hidden flex p-6 max-w-[1920px] ">
      <SignUpForm />
      <AuthContainer />
    </div>
  );
};

export default Signup;
