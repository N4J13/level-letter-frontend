import CardList from "@/components/game/Card/CardList";
import { useQuery } from "react-query";
import CardSkelton from "@/components/game/Card/CardSkelton";

const PopularGames = () => {
  const { data, isLoading, isError } = useQuery(
    "popularGames",
    async () => {
      const res = await fetch("https://api.rawg.io/api/games?key=8b3e4f3e0e7f4f8f8c0c3d2a2b6b1c4&dates=2021-10-01,2021-12-31&ordering=-rating");
      return res.json();
    }
  );



  if (isLoading) return <CardSkelton />;

  

  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      <CardList title="Popular Games" items={data.results} viewAll="/home/popular-games" />
    </div>
  );
};

export default PopularGames;
