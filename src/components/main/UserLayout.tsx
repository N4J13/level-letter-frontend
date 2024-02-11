import { Outlet } from "react-router-dom";
import Sidenav from "./Sidenav";
import Header from "./Header";

const UserLayout = () => {
  return (
    <div>
      <Sidenav />
      <Header />
      <div className="bg-background-primary min-h-svh pt-32 px-5 lg:pl-80 lg:pr-5 text-white">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
