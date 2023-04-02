import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNews } from "../../helpers/customHooks";
import NewsLayout from "../../components/News/News";
import Loader from "../../common/Loader/Loader";
import {useQuery} from "react-query";

const Main = () => {
  const { category, find } = useParams();
  const [queryParams, setQueryParamas] = useState("&country=us");
  const [newsCategory, setNewsCategory] = useState<string | undefined>("");

  console.log(queryParams);

  useEffect(() => {
    if (!category) {
      setQueryParamas("&country=us");
      setNewsCategory("");
      return;
    }

    else {
      setQueryParamas(`&category=${category}&country=us`);
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
    console.log(error);
  }

  const filterArticles = (search : string | undefined) => {
    if(!search){
      return [];
    }
    // @ts-ignore
    return data?.articles.filter((article) => article.title.toLowerCase().includes(search.toLowerCase()));
  }

  const getNewsData = () => {}

  const filterData = filterArticles(find);



  return (
    <>
      <h1 className="u-capitalize">{getTitle()}</h1>
      <div className="main__inner">
        {/*@ts-ignore*/}
        {data && data.articles && <NewsLayout newsData={data.articles} />}
      </div>
    </>
  );
};

export default Main;
