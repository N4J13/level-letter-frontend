import { useCustomList } from "@/api/services/customListService";
import ErrorComponent from "@/api/utils/apiError";
import { CustomListLoader } from "@/components/ui/loaders";
import { customListType } from "@/types";
import { AxiosError } from "axios";

const Lists = () => {
  const { data, isLoading, error } = useCustomList();

  if (isLoading) return <CustomListLoader />;

  if (error) return <ErrorComponent error={error as AxiosError} />;

  return (
    <div>
      {data.map((list: customListType) => (
        <div key={list._id}>
          <div>{list.name}</div>

          <img src={list.games[0].cover} alt={list.games[0].name} />
        </div>
      ))}
    </div>
  );
};

export default Lists;
