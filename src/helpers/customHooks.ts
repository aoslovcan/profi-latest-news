import { useQuery } from "react-query";
import { NewsClient } from "../api/NewsClient/NewsClient";

export const useNews = (criteria: string | undefined, queryParams: string) => {
    console.log(queryParams);
  const newsClient = new NewsClient();
  const { data, error, isLoading } = useQuery(
    ["news", criteria],
    async () => await newsClient.getNews(queryParams),
      {
          staleTime: 24 * (60 * 60 * 1000),
          cacheTime: 24 * (60 * 60 * 1000)
      }
  );

  return { data, error, isLoading };
};
