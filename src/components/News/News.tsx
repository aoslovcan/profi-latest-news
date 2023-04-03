import React, { useCallback, useState } from "react";
import NewsCard from "./NewsCard/NewsCard";

import { News, NewsList } from "../../types/news";
import { useLatestNews, useOnScroll } from "../../helpers/customHooks";
import Icon from "../../common/Icon/Icon";
import { excerpt, timeFormat } from "../../helpers/commonFunc";

type NewsProps = {
  newsData: NewsList;
};

const NewsLayout = ({ newsData }: NewsProps) => {
  const returnRestData = () => {
    return excerpt(newsData, 0, 3, "rest");
  };

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const { data } = useLatestNews(currentPage, pageSize);

  const loadData = useCallback(() => {
    // @ts-ignore
    if (data?.totalResults >= pageSize * currentPage) {
      setCurrentPage(currentPage + 1);
      return;
    }

    return;
  }, [data]);

  useOnScroll("c-panel", loadData);

  // @ts-ignore
  // @ts-ignore

  return (
    <>
      <NewsCard data={newsData && newsData[0]} extraClass="item" />
      <NewsCard data={newsData && newsData[1]} />
      <div className="c-panel c-news-panel item-column">
        <h2 className="c-panel__title">
          <Icon type="LatestNews" />
          Latest news
        </h2>
        <ul className="news">
          {


            data &&
              // @ts-ignore
              data?.articles.map((article) => (
                <li className="border-bottom">
                  <span className="u-b-blue">
                    {timeFormat(article.publishedAt)}
                  </span>
                  <h2>{excerpt(article.title, 0, 50, "all")}...</h2>
                </li>
              ))
          }
        </ul>
      </div>
      <NewsCard data={newsData && newsData[2]} extraClass="item" />

      {
        // @ts-ignore

        returnRestData()?.map((news: News) => (
          <NewsCard data={news} />
        ))
      }
    </>
  );
};

export default NewsLayout;
