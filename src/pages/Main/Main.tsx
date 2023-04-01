import React from "react";
import TestImg from "../../assets/images/1223468480.png";
import LatestNews from "../../assets/icons/Latest.svg";
import { useParams } from "react-router-dom";
import NewsCard from "../../components/News/NewsCard/NewsCard";
import { NewsClient } from "../../api/NewsClient/NewsClient";
import { useNews } from "../../helpers/customHooks";

const Main = () => {
  const { category } = useParams();
  const queryParams = `category=science&country=us`;

  const { data, error, isLoading } = useNews(queryParams);

  const newsData = {
    id: undefined,
    urlToImage: "https://i.ytimg.com/vi/Zc9oRKexV_s/maxresdefault.jpg",
    title: "This is test",
    category: "tech",
    author: "Nnancy Pelocy",
  };

  const newsClient = new NewsClient();

  // @ts-ignore

  return (
    <>
      <h1>News</h1>
      <div className="main__inner">
        <NewsCard data={newsData} extraClass="item" />

        <div className="c-card">
          <div className="c-card__inner">
            <div className="c-card__header">
              <img alt="test" src={TestImg} />
            </div>
            <div className="c-card__content">
              <span className="u-b-blue">Tech</span>
              <h2>V7 Digital Photo Printing</h2>
              <div className="c-card__content__footer">Caroline Parsons</div>
            </div>
          </div>
        </div>

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

        <div className="c-card item">
          <div className="c-card__inner">
            <div className="c-card__header">
              <img alt="test" src={TestImg} />
            </div>
            <div className="c-card__content">
              <span className="u-b-blue">Tech</span>
              <h2>V7 Digital Photo Printing</h2>
              <div className="c-card__content__footer">Caroline Parsons</div>
            </div>
          </div>
        </div>

        <div className="c-card">
          <div className="c-card__inner">
            <div className="c-card__header">
              <img alt="test" src={TestImg} />
            </div>
            <div className="c-card__content">
              <span className="u-b-blue">Tech</span>
              <h2>V7 Digital Photo Printing</h2>
              <div className="c-card__content__footer">Caroline Parsons</div>
            </div>
          </div>
        </div>

        <div className="c-card">
          <div className="c-card__inner">
            <div className="c-card__header">
              <img alt="test" src={TestImg} />
            </div>
            <div className="c-card__content">
              <span className="u-b-blue">Tech</span>
              <h2>V7 Digital Photo Printing</h2>
              <div className="c-card__content__footer">Caroline Parsons</div>
            </div>
          </div>
        </div>
        <div className="c-card">
          <div className="c-card__inner">
            <div className="c-card__header">
              <img alt="test" src={TestImg} />
            </div>
            <div className="c-card__content">
              <span className="u-b-blue">Tech</span>
              <h2>V7 Digital Photo Printing</h2>
              <div className="c-card__content__footer">Caroline Parsons</div>
            </div>
          </div>
        </div>
        <div className="c-card">
          <div className="c-card__inner">
            <div className="c-card__header">
              <img alt="test" src={TestImg} />
            </div>
            <div className="c-card__content">
              <span className="u-b-blue">Tech</span>
              <h2>V7 Digital Photo Printing</h2>
              <div className="c-card__content__footer">Caroline Parsons</div>
            </div>
          </div>
        </div>
        <div className="c-card">
          <div className="c-card__inner">
            <div className="c-card__header">
              <img alt="test" src={TestImg} />
            </div>
            <div className="c-card__content">
              <span className="u-b-blue">Tech</span>
              <h2>V7 Digital Photo Printing</h2>
              <div className="c-card__content__footer">Caroline Parsons</div>
            </div>
          </div>
        </div>

        <div className="c-card">
          <div className="c-card__inner">
            <div className="c-card__header">
              <img alt="test" src={TestImg} />
            </div>
            <div className="c-card__content">
              <span className="u-b-blue">Tech</span>
              <h2>V7 Digital Photo Printing</h2>
              <div className="c-card__content__footer">Caroline Parsons</div>
            </div>
          </div>
        </div>
        <div className="c-card">
          <div className="c-card__inner">
            <div className="c-card__header">
              <img alt="test" src={TestImg} />
            </div>
            <div className="c-card__content">
              <span className="u-b-blue">Tech</span>
              <h2>V7 Digital Photo Printing</h2>
              <div className="c-card__content__footer">Caroline Parsons</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
