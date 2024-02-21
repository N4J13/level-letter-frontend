import { useAuth } from "@/lib/hooks/useAuth";
import { Loader2 } from "lucide-react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className=" flex absolute translate-x-1/2 translate-y-1/2 top-1/2 left-1/2">
        <Loader2 className="animate-spin text-green-500" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return children;
}
