import React, { useCallback, useState } from "react";
import NewsCard from "./NewsCard/NewsCard";

import { News, NewsList } from "../../types/news";
import {
  useLatestNews,
  useOnScroll,
  useWindowSize,
} from "../../helpers/customHooks";
import Icon from "../../common/Icon/Icon";
import { excerpt, timeFormat } from "../../helpers/commonFunc";

type NewsProps = {
  newsData: NewsList;
};

const NewsLayout = ({ newsData }: NewsProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const { width } = useWindowSize();
  const { data } = useLatestNews(currentPage, pageSize);

  const returnRestData = (fromValue: number) => {
    return excerpt(newsData, fromValue, 0, "rest");
  };

  const loadData = useCallback(() => {

    if (data?.totalResults as number >= pageSize * currentPage) {
      setCurrentPage(currentPage + 1);
      return;
    }

    if (pageSize * currentPage > (data?.totalResults as number)) {
      setCurrentPage(1);
      return;
    }
  }, [data, currentPage]);

  useOnScroll("c-panel", loadData);

  let panelData : any = data?.articles;

  const panelElement = (
    <div className="c-panel c-news-panel item-column">
      <h2 className="c-panel__title">
        <Icon type="LatestNews" />
        Latest news
      </h2>
      <ul className="news">
        {panelData &&
            panelData?.map((article : any) => (
            <li className="u-border-bottom">
              <span className="u-b-blue">
                {timeFormat(article.publishedAt)}
              </span>
              <h2>{excerpt(article.title, 0, 50, "all")}...</h2>
            </li>
          ))}
      </ul>
    </div>
  );


  if (width <= 1241) {
    return (
      <>
        <NewsCard data={newsData[0]} extraClass="item" />
        <NewsCard data={newsData[1]} extraClass="item" />
        {panelElement}
        <NewsCard data={newsData[2]} extraClass="item" />
        {
          // @ts-ignore
          returnRestData(4)?.map((news: News) => {
            return <NewsCard data={news} />;
          })
        }
      </>
    );
  }

  return (
    <>
      <NewsCard data={newsData && newsData[0]} extraClass="item" />
      <NewsCard data={newsData && newsData[1]} />
      {panelElement}
      <NewsCard data={newsData && newsData[2]} extraClass="item" />

      {
        // @ts-ignore
        returnRestData(3)?.map((news: News) => (
          <NewsCard data={news} />
        ))
      }
    </>
  );
};

export default NewsLayout;
