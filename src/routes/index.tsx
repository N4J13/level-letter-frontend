import { Route, Routes } from "react-router-dom";
import Signup from "@/pages/auth/signup";
import Login from "@/pages/auth/login";
import VerifyEmail from "@/pages/auth/verify";
import ForgotPassword from "@/pages/auth/forgot-password";
import Home from "@/pages/home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify" element={<VerifyEmail />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
};
