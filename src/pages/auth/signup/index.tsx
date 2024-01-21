import AuthSidePanel from "@/components/AuthSidePanel";
import SignUpForm from "./SignupForm";

const Signup = () => {
  return (
    <div className="h-svh w-full overflow-hidden flex p-6 max-w-[1920px] mx-auto">
      <SignUpForm />
      <AuthSidePanel />
    </div>
  );
};

export default Signup;
