import PopularGames from "./components/PopularGames";
import UpcomingGames from "./components/UpcomingGames";


const Home = () => {

  return (
    <div className="space-y-6">
      <UpcomingGames />
      <PopularGames />
    </div>
  );
};

export default Home;
