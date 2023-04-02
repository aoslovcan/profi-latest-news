import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNews } from "../../helpers/customHooks";
import NewsLayout from "../../components/News/News";
import Loader from "../../common/Loader/Loader";

const Main = () => {
  const { category } = useParams();
  const [queryParams, setQueryParamas] = useState("");
  const [newsCategory, setNewsCategory] = useState<string | undefined>();

  useEffect(() => {
    if (!category) {
      setQueryParamas("&country=us");
      setNewsCategory("");
      return;
    }
    setQueryParamas(`&category=${category}&country=us`);
    setNewsCategory(category);
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

  return (
    <>
      <h1 className="u-capitalize">{getTitle()}</h1>
      <div className="main__inner">
        {/*@ts-ignore*/}
        {data?.articles && <NewsLayout newsData={data.articles} />}
      </div>
    </>
  );
};

export default Main;
