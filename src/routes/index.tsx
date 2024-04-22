import { Route, Routes } from "react-router-dom";
import Signup from "@/pages/auth/signup";
import Login from "@/pages/auth/login";
import VerifyEmail from "@/pages/auth/verify";
import ForgotPassword from "@/pages/auth/forgot-password";
import Home from "@/pages/home";
import Category from "@/pages/categories/[category]";
import UserLayout from "@/components/main/UserLayout";
import AuthLayout from "@/components/main/AuthLayout";
import ProtectedRoute from "./ProtectedRoute";
import Lists from "@/pages/user/lists";
import ResetPassword from "@/pages/auth/reset-password";
import MyGames from "@/pages/user/my-games";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>
      <Route path="/verify" element={<VerifyEmail />} />
      <Route path="/" element={<UserLayout />}>
        <Route
          index
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/categories/:category"
          element={
            <ProtectedRoute>
              <Category />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <div>Profile</div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-games"
          element={
            <ProtectedRoute>
              <MyGames />
            </ProtectedRoute>
          }
        />
        <Route
          path="/collections"
          element={
            <ProtectedRoute>
              <div>Collections</div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/lists"
          element={
            <ProtectedRoute>
              <Lists />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};
