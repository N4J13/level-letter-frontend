import CardList from "@/components/game/Card/CardList";
import { useQuery } from "react-query";
import { getPopularGames } from "../api/games";
import CardSkelton from "@/components/game/Card/CardSkelton";

const PopularGames = () => {
  const { data, isLoading, isError } = useQuery(
    "popularGames",
    getPopularGames
  );

  if (isLoading) return <CardSkelton />;

  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      <CardList title="Popular Games" items={data} viewAll="/popular-games" />
    </div>
  );
};

export default PopularGames;
