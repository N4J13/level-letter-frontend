import { Link } from "react-router-dom";
import Card from "./Card";

type CardListProps = {
  title: string;
  items: {
    title: string;
    id: string;
    background_image: string;
  }[];
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
        {items.map((item) => (
          <Link to={`/game/${item.id}`} key={item.title}>
            <Card title={item.title} image={item.background_image} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardList;
