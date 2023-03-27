import React from "react";
import logo from "./assets/images/MyNews.png"
import Search from "./assets/icons/Search.svg";
import Home from "./assets/icons/Home.svg";
import TVGuide from "./assets/icons/TV-Guide.svg";
import News from "./assets/icons/News.svg";
import Briefcase from "./assets/icons/briefcase.svg";
import Bold from "./assets/icons/Bold.svg"
import Health from "./assets/icons/Health.svg";
import LabBottle from "./assets/icons/lab-bottle-experiment.svg";
import TestImg from "./assets/images/1223468480.png";
import LatestNews from "./assets/icons/Latest.svg";

export const Layout = () => {
    return (
        <div className="u-lyt" data-testid="layout">
            <header className="c-header border-bottom">
                <img className="logo" alt="logo" src={logo}/>
                <div className="search-element">
                    <div className="search-element__content">
                        <img className="icon" alt="icon" src={Search}/>
                        <input type="search" placeholder="Search news"/>
                    </div>
                    <button className="c-button c-button--primary">Search</button>
                </div>
            </header>

            <div className="o-page">
                <div className="sidebar">
                    <nav className="navigation">
                        <ul className="menu">
                            <li className="menu__item menu__item-active">
                                <a href="#">
                                    <img alt="Home" className="icon" src={Home}/>
                                    Home
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="#">
                                    <img className="icon" alt="Home" src={News}/>
                                    General
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="#">
                                    <img className="icon" alt="Home" src={Briefcase}/>
                                    Business
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="#">
                                    <img className="icon" alt="Home" src={Health}/>
                                    Health
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="#">
                                    <img className="icon" alt="Home" src={LabBottle}/>
                                    Science
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="#">
                                    <img className="icon" alt="Home" src={Bold}/>
                                    Sports
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="#">
                                    <img className="icon" alt="Home" src={TVGuide}/>
                                    Technology
                                </a>
                            </li>
                        </ul>
                    </nav>


                </div>
                <div className="main">
                    <h1>
                        News
                    </h1>

                    <div className="main__inner">
                        <div className="c-card item">
                            <div className="c-card__inner">
                                <div className="c-card__header">
                                    <img alt="test" src={TestImg}/>
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
                                    <img alt="test" src={TestImg}/>
                                </div>
                                <div className="c-card__content">
                                    <span className="u-b-blue">Tech</span>
                                    <h2>V7 Digital Photo Printing</h2>
                                    <div className="c-card__content__footer">Caroline Parsons</div>
                                </div>
                            </div>
                        </div>

                        <div className="c-panel c-news-panel item-column">
                            <h2 className="c-panel__title"><img alt="latest" className="icon" src={LatestNews}/>Latest
                                news</h2>
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
                                    <img alt="test" src={TestImg}/>
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
                                    <img alt="test" src={TestImg}/>
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
                                    <img alt="test" src={TestImg}/>
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
                                    <img alt="test" src={TestImg}/>
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
                                    <img alt="test" src={TestImg}/>
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
                                    <img alt="test" src={TestImg}/>
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
                                    <img alt="test" src={TestImg}/>
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
                                    <img alt="test" src={TestImg}/>
                                </div>
                                <div className="c-card__content">
                                    <span className="u-b-blue">Tech</span>
                                    <h2>V7 Digital Photo Printing</h2>
                                    <div className="c-card__content__footer">Caroline Parsons</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}