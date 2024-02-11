import { Route, Routes } from "react-router-dom";
import Signup from "@/pages/auth/signup";
import Login from "@/pages/auth/login";
import VerifyEmail from "@/pages/auth/verify";
import ForgotPassword from "@/pages/auth/forgot-password";
import Home from "@/pages/home";
import Category from "@/pages/categories/[category]";
import UserLayout from "@/components/main/UserLayout";
import AuthLayout from "@/components/main/AuthLayout";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>
      <Route path="/verify" element={<VerifyEmail />} />

      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="/categories/:category" element={<Category />} />
        <Route path="/profile" element={<div>Profile</div>} />
        <Route path="/my-games" element={<div>My Games</div>} />
        <Route path="/collections" element={<div>Collections</div>} />
        <Route path="/lists" element={<div>Lists</div>} />
      </Route>
    </Routes>
  );
};
