import React from "react";
import { useParams } from "react-router-dom";
import { useNews } from "../../helpers/customHooks";
import NewsLayout from "../../components/News/News";
import Loader from "../../common/Loader/Loader";

const Main = () => {
  const { category } = useParams();
  const queryParams = `category=science&country=us`;

  const { data, error, isLoading } = useNews(queryParams);

  console.log(data);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <h1>News</h1>
      <div className="main__inner">
        {/*@ts-ignore*/}
        {data?.articles && <NewsLayout newsData={data.articles} />}
      </div>
    </>
  );
};

export default Main;
