import LoginForm from "./LoginForm";
import AuthSidePanel from "@/components/AuthSidePanel";

const Login = () => {
  return (
    <div className="h-svh w-full overflow-hidden flex p-6 max-w-[1920px] mx-auto">
      <LoginForm />
      <AuthSidePanel />
    </div>
  );
};

export default Login;
