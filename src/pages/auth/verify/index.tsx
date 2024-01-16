import { axiosInstance } from "@/lib/axios";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const token = search.get("token");
  useEffect(() => {
    const verifyToken = async () => {
      try {
        if (!token) return navigate("/login");
        const response = await axiosInstance.post("/user/verify", { token });
        const { token: jwttoken, userId } = response.data;
        localStorage.setItem("token", jwttoken);
        localStorage.setItem("userId", userId);
        navigate("/");
      } catch (error) {
        console.error("Verification failed", error);
      }
    };

    verifyToken();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <div className="min-h-svh flex justify-center items-center">
      <div className="flex items-center">
        <Loader2 className="animate-spin text-primary" size={30} />
        <h1 className="text-xl ml-2">Verifying your account...</h1>
      </div>
    </div>
  );
};

export default VerifyEmail;
