import LoginForm from "./LoginForm";
import AuthContainer from "@/components/AuthContainer";

const Login = () => {
  return (
    <div className="h-svh w-full overflow-hidden flex p-6 max-w-[1920px] ">
      <LoginForm />
      <AuthContainer />
    </div>
  );
};

export default Login;
