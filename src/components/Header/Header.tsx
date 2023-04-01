import React from "react";
import logo from "../../assets/images/MyNews.png";
import SearchInput from "../../common/SearchInput/SearchInput";

const Header = () => {
  return (
    <header className="c-header border-bottom">
      <img className="logo" alt="logo" src={logo} />
      <SearchInput placeholder="Search news" />
    </header>
  );
};

export default Header;
