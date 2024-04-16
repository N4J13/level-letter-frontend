import { useParams } from "react-router-dom";
import { getGamesbyCategory } from "../api/category";
import { useQuery } from "react-query";
import CardSkelton from "@/components/game/Card/CardSkelton";
import CardList from "@/components/game/Card/CardList";
import { firstLetterUppercase } from "@/lib/utils";

const Category = () => {
  const { category } = useParams();

  const { data, isLoading, isError } = useQuery(
    ["gamesByCategory", category],
    () => getGamesbyCategory(category)
  );

  if (isLoading) return <CardSkelton />;

  if (isError) return <div>Error fetching data</div>;

  const title = firstLetterUppercase(category!) + " " + "Games";
  return (
    <div className="">
      <CardList
        title={title}
        items={data.results}
        viewAll={`/categories/${category}`}
      />
    </div>
  );
};

export default Category;
