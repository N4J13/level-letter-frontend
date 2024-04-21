import { useGetMyGames } from "@/api/services/userService";
import Tab from "@/components/ui/line-tab";
import { Game } from "@/types";
import { useState } from "react";
import queryString from "query-string";
import { useNavigate } from "react-router-dom";
import { myGamesTabElements } from "@/data";
import GameCard from "@/components/game/Card/Card";

const MyGames = () => {
  const { status } = queryString.parse(
    new URLSearchParams(location.search).toString()
  );
  const [selected, setSelected] = useState(status || "yet");
  const [statusParams, setStatusParams] = useState(status || "yet");
  const navigate = useNavigate();

  const {
    data: myGames,
    isLoading,
  } = useGetMyGames(statusParams as string);

  const handleClick = (value: string) => {
    setSelected(value);
    const lowerCaseValue = value.toLowerCase();
    setStatusParams(lowerCaseValue);
    navigate(`/my-games?status=${lowerCaseValue}`);
  };

  return (
    <div>
      <div className=" border-slate-800 mb-8 flex flex-wrap items-center gap-2 border-b">
        {myGamesTabElements.map((tab, index) => (
          <Tab
            text={tab}
            selected={selected === tab.value}
            handleClick={handleClick}
            key={index}
            customID={"customID"}
          />
        ))}
      </div>

      {isLoading && <div>Loading...</div>}

     
      <div className="grid grid-cols-4 gap-4">
        {myGames?.map((game: Game) => (
          <GameCard {...game} />
        ))}
      </div>
    </div>
  );
};

export default MyGames;
