import React from "react";
import logo from "../../assets/images/MyNews.png";
import Search from "../../assets/icons/Search.svg";

const Header = () => {
    return(
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
    )
}

export default Header;