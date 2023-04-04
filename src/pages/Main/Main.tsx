import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNews } from "../../helpers/customHooks";
import NewsLayout from "../../components/News/News";
import Loader from "../../common/Loader/Loader";
import NewsCard from "../../components/News/NewsCard/NewsCard";

const Main = () => {
  const { category, find } = useParams();
  const [queryParams, setQueryParams] = useState("&country=us");
  const [newsCategory, setNewsCategory] = useState<string | undefined>("");

  useEffect(() => {
    if (!category) {
      setQueryParams("&country=us");
      setNewsCategory("");
      return;
    } else {
      setQueryParams(`&category=${category}&country=us`);
      setNewsCategory(category);
      return;
    }
  }, [category]);

  const { data, error, isLoading } = useNews(newsCategory, queryParams);

  const getTitle = () => {
    switch (category) {
      case undefined:
        return "News";
      default:
        return category;
    }
  };

  if (isLoading) {
    return <Loader />;
  } else if (error) {
    //TODO handle error
    console.log("Error log", error);
  }

  const filterArticles = (search: string | undefined) => {
    if (!search) {
      return [];
    }
    if (data && data.articles) {
      // @ts-ignore
      return data.articles?.filter((article) =>
        article?.title.toLowerCase().includes(search.toLowerCase())
      );
    }
  };

  const filterData = filterArticles(find);
  const newsData = filterData.length ? filterData : data?.articles;

  return (
    <div id="main-page" data-testid="main-page">
      <h1 data-testid="page-title" className="u-capitalize">
        {getTitle()}
      </h1>
      <div className="main__inner">
        {newsData?.length > 1 && <NewsLayout newsData={newsData} />}
        {newsData?.length === 1 && <NewsCard data={newsData[0]} />}
      </div>
    </div>
  );
};

export default Main;
