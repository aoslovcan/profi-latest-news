import React from "react";
import Card from "../../../common/Card/Card";
import { News } from "../../../types/news";
import "../News.scss";

type NewsCardProps = {
  data: News;
  extraClass?: string;
};

const NewsCard = ({ data, extraClass }: NewsCardProps) => {
  const imageComponent = data?.urlToImage ? (
    <img className="c-card__header-inner" alt="test" src={data?.urlToImage} />
  ) : (
    <div className="c-card__header-inner"></div>
  );

  const titleExcerpt = `${data?.title?.slice(0, 50)}...`;
  const newsContent = (
    <>
      <span className="u-b-blue">{data?.category}</span>
      <h2>{titleExcerpt}</h2>
      <div className="c-card__content__footer">{data?.author}</div>
    </>
  );

  return (
    <Card
      headerComponent={imageComponent}
      content={newsContent}
      extraClass={extraClass}
    />
  );
};

export default NewsCard;
