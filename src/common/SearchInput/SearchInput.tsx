import React, { useState, useCallback, useEffect } from "react";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import { data } from "../../types/common";

type SearchProps = {
  placeholder: string;
  hasButton?: boolean;
  handleSearch: (data: data) => void;
  handleReset: () => void;
};

const SearchInput = ({
  placeholder,
  hasButton = true,
  handleSearch,
  handleReset,
}: SearchProps) => {
  const [inputValue, setInputValue] = useState<data>("");
  const [isReset, setIsReset] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    setInputValue(target.value);
  };

  const onSearch = useCallback(() => {
    setIsReset(true);
    handleSearch(inputValue);
  }, [inputValue]);

  const searchButton = hasButton && !isReset && (
    <Button label="Search" handleClick={onSearch} type="primary" />
  );

  const onReset = () => {
    handleReset();
    setInputValue("");
    setIsReset(false);
  };

  const resetButton = isReset && (
    <Button label="Reset" handleClick={onReset} type="primary" />
  );

  return (
    <div className="c-search-form">
      <div className="c-search-form__inner">
        <Icon type="Search" />
        <input
          type="search"
          value={inputValue}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
      {searchButton}
      {resetButton}
    </div>
  );
};
export default SearchInput;
