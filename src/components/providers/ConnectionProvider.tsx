import { useEffect, useState } from "react";

const ConnectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [online, setOnline] = useState<boolean>(navigator.onLine);
  useEffect(() => {
    const handleOnline = () => {
      setOnline(true);
    };
    const handleOffline = () => {
      setOnline(false);
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!online) {
    return (
      <div className="flex justify-center items-center h-dvh w-full">
        <div className="space-y-4 text-center">
          <div className="text-4xl font-bold text-red-500">
            No Internet Connection
          </div>
          <div className="text-lg font-bold text-red-500">
            Please check your internet connection
          </div>
        </div>
      </div>
    );
  }
  return <div>{children}</div>;
};

export default ConnectionProvider;
