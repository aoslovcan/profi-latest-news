import React from "react";
import Card from "../../../common/Card/Card";
import { News } from "../../../types/news";

type NewsCardProps = {
  data: News;
  extraClass?: string;
};

const NewsCard = ({ data, extraClass }: NewsCardProps) => {
  const { urlToImage, category, author, title } = data;

  const imageComponent = urlToImage && <img alt="test" src={urlToImage} />;
  const newsContent = (
    <>
      <span className="u-b-blue">{category}</span>
      <h2>{title}</h2>
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
