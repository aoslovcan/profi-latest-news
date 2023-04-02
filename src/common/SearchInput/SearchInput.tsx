import React, { useState, useCallback } from "react";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import { data } from "../../types/common";

type SearchProps = {
  placeholder: string;
  hasButton?: boolean;
  handleSearch: (data: data) => void;
};

const SearchInput = ({
  placeholder,
  hasButton = true,
  handleSearch,
}: SearchProps) => {
  const [inputValue, setInputValue] = useState<data>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    setInputValue(target.value);
  };

  const onSearch = useCallback(() => {
    handleSearch(inputValue);
  }, [inputValue]);

  const searchButton = hasButton && (
    <Button label="Search" handleClick={onSearch} type="primary" />
  );

  return (
    <div className="c-search-form">
      <div className="c-search-form__inner">
        <Icon type="Search" />
        <input
          type="search"
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
      {searchButton}
    </div>
  );
};
export default SearchInput;
