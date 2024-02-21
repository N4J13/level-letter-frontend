import { Skeleton } from "@/components/ui/skeleton";

const CardSkelton = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center w-full">
        <Skeleton className="w-36 h-5" />
        <Skeleton className="w-20 h-5" />
      </div>
      <div className="grid grid-cols-5 gap-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="w-full h-40" />
        ))}
      </div>
    </div>
  );
};

export default CardSkelton;
