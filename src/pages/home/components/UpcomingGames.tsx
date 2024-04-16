import CardList from "@/components/game/Card/CardList";
import { useQuery } from "react-query";
import { getUpcomingGames } from "../api/games";
import CardSkelton from "@/components/game/Card/CardSkelton";

const UpcomingGames = () => {
  const { data, isLoading, isError } = useQuery(
    "upcomingGames",
    getUpcomingGames
  );



  if (isLoading) return <CardSkelton />;

  console.log(data);
  

  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      <CardList title="Upcoming Games" items={data.results} viewAll="/home/upcoming-games" />
    </div>
  );
};

export default UpcomingGames;
