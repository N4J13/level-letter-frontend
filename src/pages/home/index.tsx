import { useAuth } from "@/lib/hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  return <div className="">{user?.email as string}</div>;
};

export default Home;
