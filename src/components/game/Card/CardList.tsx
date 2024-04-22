import { Link } from "react-router-dom";
import GameCard from "./Card";
import { Game } from "@/types";

type CardListProps = {
  title: string;
  items: Game[]
  viewAll?: string;
};

const CardList: React.FC<CardListProps> = ({ title, items, viewAll }) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="w-full flex justify-between items-center">
        <div className="text-white font-medium text-xl">{title}</div>
        {viewAll && (
          <Link to={viewAll} className="text-green-500 text-sm">
            View All
          </Link>
        )}
      </div>
      <div className="grid grid-cols-5 gap-4 w-full overflow-auto">
        {items.map((item : Game) => (
          <Link to={`/game/${item._id}`} key={item._id}>
            <GameCard {...item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardList;
