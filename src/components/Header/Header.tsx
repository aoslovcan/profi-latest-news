import React, {useState} from "react";
import logo from "../../assets/images/MyNews.png";
import SearchInput from "../../common/SearchInput/SearchInput";
import {data} from "../../types/common";
import {useNavigate} from "react-router-dom";
import {useWindowSize} from "../../helpers/customHooks";
import MobileNavigation from "../Navigation/MobileNavigation/MobileNavigation";

const Header = () => {
    const navigate = useNavigate();
    const [isMobileNav, setIsMobileNav] = useState(false);

    const getSearchData = (data: data) => {
        navigate(`/news/search/${data}`);
    };

    const goBack = () => {
        navigate("/news/");
    };

    const {width} = useWindowSize();

    const openNavigation = () => {
        setIsMobileNav(!isMobileNav);
    }

    const hamburgerIcon =  <div onClick={openNavigation} className="c-hamburger-wrapper">
        <div className={`c-hamburger-menu ${isMobileNav ? "is-active" : ""}`}/>
    </div>

    const searchElement = (<SearchInput
        placeholder="Search news"
        handleSearch={getSearchData}
        handleReset={goBack}
    />)

    const mobileView = (<>
    <div className="c-header__mobile">
        <img className="logo" alt="logo" src={logo}/>
        {hamburgerIcon}
    </div>
        {searchElement}
    </>)

    return (
        <>
            <header className="c-header u-border-bottom" data-testid="c-header">
                {width <= 800 ? mobileView : <>
                    <img className="logo" alt="logo" src={logo}/>
                    {searchElement}
                    {width < 800 && hamburgerIcon}</>}
            </header>

            {isMobileNav && <MobileNavigation/>}
        </>

    );
};

export default Header;
