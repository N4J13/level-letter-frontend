import { Game } from "@/types";
import { Link } from "react-router-dom";

const GameCard = (game: Game) => {
  return (
    <Link to={`/game/${game._id}`} className="w-full aspect-video">
      <div className="w-full aspect-video">
        <img
          src={game.cover}
          alt={game.name}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </Link>
  );
};

export default GameCard;
