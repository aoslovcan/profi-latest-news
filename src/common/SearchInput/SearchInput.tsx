import React from "react";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import { data } from "../../types/common";

type SearchProps = {
  placeholder: string;
  hasButton?: boolean;
  handleSearch?: (data: data) => { data: data };
};

const SearchInput = ({
  placeholder,
  hasButton = true,
  handleSearch,
}: SearchProps) => {
  const onSearch = () => {
    //TODO handle search
  };

  const searchButton = hasButton && (
    <Button label="Search" handleClick={onSearch} type="primary" />
  );

  return (
    <div className="c-search-form">
      <div className="c-search-form__inner">
        <Icon type="Search" />
        <input type="search" placeholder={placeholder} />
      </div>
      {searchButton}
    </div>
  );
};
export default SearchInput;
