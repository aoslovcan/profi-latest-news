import { useQuery } from "react-query";
import { NewsClient } from "../api/NewsClient/NewsClient";

export const useNews = (queryParams: string) => {
  const newsClient = new NewsClient();
  const { data, error, isLoading } = useQuery(
    "news",
    async () => await newsClient.getNews(queryParams)
  );

  return { data, error, isLoading };
};
