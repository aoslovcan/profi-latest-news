import React from "react";
import logo from "../../assets/images/MyNews.png";
import SearchInput from "../../common/SearchInput/SearchInput";
import { data } from "../../types/common";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const getSearchData = (data: data) => {
    navigate(`/news/search/${data}`);
  };

  const goBack = () => {
    navigate("/news/");
  };

  return (
    <header className="c-header u-border-bottom" data-testid="c-header">
      <img className="logo" alt="logo" src={logo} />
      <SearchInput
        placeholder="Search news"
        handleSearch={getSearchData}
        handleReset={goBack}
      />
    </header>
  );
};

export default Header;
