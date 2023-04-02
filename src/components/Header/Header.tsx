import React from "react";
import logo from "../../assets/images/MyNews.png";
import SearchInput from "../../common/SearchInput/SearchInput";
import { data } from "../../types/common";
import {useNavigate} from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();
  const getSearchData = (data: data) => {
      console.log(data);
      navigate(`/news/search/${data}`);

  };

  return (
    <header className="c-header border-bottom">
      <img className="logo" alt="logo" src={logo} />
      <SearchInput placeholder="Search news" handleSearch={getSearchData} />
    </header>
  );
};

export default Header;
