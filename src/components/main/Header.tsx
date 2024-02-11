import Profile from "./Profile";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { useSideNavStore } from "@/store/zustand";

const Header = () => {
  const {  toggleActive}  = useSideNavStore();
  return (
    <header className="w-full flex lg:pl-[320px] fixed top-0  items-center px-6 lg:px-10 py-[19px] justify-between border-b border-slate-800 bg-background-secondary">
      <div className="lg:hidden block">
        <img src="/logo-white.png" alt="logo" className="w-[160px]" />
      </div>
      <div className="flex justify-end items-center gap-6  lg:w-full lg:justify-between">
      <Button onClick={() => toggleActive()} size={"icon"} variant={"default"} className="bg-[#272d36] rounded-full"  >
        <Search size={24} className="text-white size-5" />
      </Button>
      <Profile />
      </div>
    </header>
  );
};

export default Header;
