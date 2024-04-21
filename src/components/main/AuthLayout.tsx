import { Outlet } from "react-router-dom";
import AuthSidePanel from "../AuthSidePanel";

const AuthLayout = () => {
  return (
    <div className="h-svh w-full overflow-hidden flex p-6 max-w-[1920px] mx-auto">
      <div className="flex-1 px-0 lg:px-10 ">
        <img src="/logo.png" width={170} alt="Level Letter Logo" />
        <div className="max-w-md mx-auto space-y-8 h-full flex flex-col justify-center">
          
          <Outlet />
        </div>
      </div>

      <AuthSidePanel />
    </div>
  );
};

export default AuthLayout;
