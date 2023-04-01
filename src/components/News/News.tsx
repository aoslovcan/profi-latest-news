import React from "react";
import NewsCard from "./NewsCard/NewsCard";
import LatestNews from "../../assets/icons/Latest.svg";
import { NewsList } from "../../types/news";

type NewsProps = {
  newsData: NewsList;
};

const NewsLayout = ({ newsData }: NewsProps) => {
  return (
    <>
      <NewsCard data={newsData[0]} extraClass="item" />
      <NewsCard data={newsData[0]} />
      <div className="c-panel c-news-panel item-column">
        <h2 className="c-panel__title">
          <img alt="latest" className="icon" src={LatestNews} />
          Latest news
        </h2>
        <ul className="news">
          <li className="border-bottom">
            <span className="u-b-blue">14:30</span>
            <h2>How To Write Better Advertising Copy</h2>
          </li>
          <li className="border-bottom">
            <span className="u-b-blue">14:30</span>
            <h2>How To Write Better Advertising Copy</h2>
          </li>
          <li className="border-bottom">
            <span className="u-b-blue">14:30</span>
            <h2>How To Write Better Advertising Copy</h2>
          </li>
          <li className="border-bottom">
            <span className="u-b-blue">14:30</span>
            <h2>How To Write Better Advertising Copy</h2>
          </li>
          <li className="border-bottom">
            <span className="u-b-blue">14:30</span>
            <h2>How To Write Better Advertising Copy</h2>
          </li>
          <li className="border-bottom">
            <span className="u-b-blue">14:30</span>
            <h2>How To Write Better Advertising Copy</h2>
          </li>
          <li className="border-bottom">
            <span className="u-b-blue">14:30</span>
            <h2>How To Write Better Advertising Copy</h2>
          </li>
        </ul>
      </div>
      <NewsCard data={newsData[0]} extraClass="item" />
      <NewsCard data={newsData[0]} />
      <NewsCard data={newsData[0]} />
      <NewsCard data={newsData[0]} />
      <NewsCard data={newsData[0]} />
      <NewsCard data={newsData[0]} />
      <NewsCard data={newsData[0]} />
      <NewsCard data={newsData[0]} />
    </>
  );
};

export default NewsLayout;
