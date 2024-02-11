type CardProps = {
  title: string;
 
  image: string;
};

const Card: React.FC<CardProps> = ({ title, image }) => {
  return (
    <div className="w-full aspect-video">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
  );
};

export default Card;
