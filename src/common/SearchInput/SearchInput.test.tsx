import React from "react";
import SearchInput from "./SearchInput";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

const mockSearch = jest.fn();
const mockReset = jest.fn();
const placeholder = "Search";

jest.mock("../Icon/Icon", () => () => {
  const getIcon = () => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.4864 18.016L14.0455 12.5751C16.5098 9.33574 16.0428 4.74092 12.9771 2.06363C9.91134 -0.61365 5.29547 -0.457726 2.41741 2.42034C-0.460656 5.2984 -0.61658 9.91427 2.0607 12.98C4.73799 16.0457 9.33281 16.5128 12.5722 14.0485L18.013 19.4893C18.4228 19.889 19.0766 19.889 19.4864 19.4893C19.8928 19.0823 19.8928 18.423 19.4864 18.016ZM2.29138 7.91681C2.29138 4.81021 4.80978 2.29181 7.91638 2.29181C11.023 2.29181 13.5414 4.81021 13.5414 7.91681C13.5414 11.0234 11.023 13.5418 7.91638 13.5418C4.8113 13.5381 2.29505 11.0219 2.29138 7.91681Z"
          fill="#A5A5A4"
        />
      </svg>
    );
  };
  return <div className="icon">{getIcon()}</div>;
});

describe("SearchInput", () => {
  it("render", () => {
    render(
      <SearchInput
        placeholder={placeholder}
        handleSearch={jest.fn()}
        handleReset={mockReset}
      />
    );

    expect(screen.getByTestId("c-search-form")).toBeInTheDocument();
  });

  it("should call search action", () => {
    const mockSearch = jest.fn();
    render(
      <SearchInput
        placeholder={placeholder}
        handleSearch={mockSearch}
        handleReset={mockReset}
      />
    );

    let searchButton = screen.getByTestId("search-button");
    expect(searchButton).toBeInTheDocument();

    fireEvent.click(searchButton);

    expect(mockSearch).toBeCalled();
  });

  it("should call reset action", async () => {
    const mockReset = jest.fn();
    render(
      <SearchInput
        placeholder={placeholder}
        handleSearch={mockSearch}
        handleReset={mockReset}
      />
    );

    let inputElement = screen.getByTestId("search-input") as HTMLInputElement;
    let searchButton = screen.getByTestId("search-button");

    expect(inputElement).toBeInTheDocument();

    const mockData = { target: { value: "News" } };

    fireEvent.change(inputElement, mockData);

    expect(inputElement.value).toBe("News");

    fireEvent.click(searchButton);

    await waitFor(() => {
      let resetButton = screen.getByTestId("reset-button");
      fireEvent.click(resetButton);
    });

    expect(mockReset).toBeCalled();
  });
});
