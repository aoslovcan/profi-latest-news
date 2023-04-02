import { useQuery } from "react-query";
import { NewsClient } from "../api/NewsClient/NewsClient";

export const useNews = (criteria: string | undefined, queryParams: string) => {
  const newsClient = new NewsClient();
  const { data, error, isLoading } = useQuery(
    ["news", criteria],
    async () => await newsClient.getNews(queryParams)
  );

  return { data, error, isLoading };
};
