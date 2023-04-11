import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { NewsClient } from "../api/NewsClient/NewsClient";
const newsClient = new NewsClient();

export const useNews = (
  criteria: string | number | undefined,
  queryParams: string
) => {
  const { data, error, isLoading } = useQuery(
    ["news", criteria],
    async () => await newsClient.getNews(queryParams),
    {
      staleTime: 24 * (60 * 60 * 1000),
      cacheTime: 24 * (60 * 60 * 1000),
    }
  );

  return { data, error, isLoading };
};

export const useLatestNews = (page: number = 1, pageSize: number) => {
  let queryParams = `&country=us&pageSize=${pageSize}&page=${page}`;
  const { data } = useNews(page, queryParams);

  return { data };
};

export const useOnScroll = (elem: string, callback: Function) => {
  const scrollElement  = document.querySelector(`.${elem}`) as HTMLElement;

  scrollElement?.addEventListener("scroll", () => {
    // @ts-ignore
    if (
      scrollElement?.scrollHeight - scrollElement.offsetHeight ===
      scrollElement?.scrollTop
    ) {
      callback();
    }
  });
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
