import React from "react";
import logo from "./assets/images/MyNews.png"
import Search from "./assets/icons/Search.svg";

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
                            <li className="menu__item">
                                <a href="#">
                                    Home
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="#">
                                    General
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="#">
                                    Business
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="#">
                                    Health
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="#">
                                    Science
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="#">
                                    Sports
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="#">
                                    Technology
                                </a>
                            </li>
                        </ul>
                    </nav>


                </div>
                <div className="main">
                    <div className="title">
                        Page
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>



        </div>
    )
}