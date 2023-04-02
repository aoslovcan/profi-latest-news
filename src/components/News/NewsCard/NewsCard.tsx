import React from "react";
import Card from "../../../common/Card/Card";
import { News } from "../../../types/news";
import "../News.scss";

type NewsCardProps = {
  data: News;
  extraClass?: string;
};

const NewsCard = ({ data, extraClass }: NewsCardProps) => {
  // @ts-ignore
  const { urlToImage, category, author, title } = data;

  const imageComponent = urlToImage ? (
    <img className="c-card__header-inner" alt="test" src={urlToImage} />
  ) : (
    <div className="c-card__header-inner"></div>
  );

  const titleExcerpt = `${title?.slice(0, 50)}...`;
  const newsContent = (
    <>
      <span className="u-b-blue">{category}</span>
      <h2>{titleExcerpt}</h2>
      <div className="c-card__content__footer">{author}</div>
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
