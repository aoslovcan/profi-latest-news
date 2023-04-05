import React from "react";
import { render, screen } from "@testing-library/react";
import Main from "./Main";
import { QueryClient, QueryClientProvider } from "react-query";

jest.mock("../../common/Icon/Icon", () => () => {
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

const mockData = {
  articles: [
    {
      author: "Brian Hamilton",
      title:
        "Adama Sanogo is now a UConn legend — and has the national championship ball to prove it - The Athletic",
      description:
        "Sanogo was named the Final Four's Most Outstanding Player after scoring 17 points with 10 rebounds against San Diego State.",
      url: "https://theathletic.com/4379410/2023/04/04/uconn-adama-sanogo-ncaa-championship/",
      urlToImage:
        "https://cdn.theathletic.com/app/uploads/2023/04/04025702/GettyImages-1479587591-1024x683.jpg",
      publishedAt: "2023-04-04T16:18:18Z",
      content:
        "HOUSTON As the next great UConn big man ascended Monday night, bound for a net half-dangling off the NRG Stadiums north rim, Emeka Okafor paused and held out a hand. The kid from Mali who was a socce… [+6919 chars]",
    },
    {
      author: "Brian Hamilton",
      title:
        "Adama Sanogo is now a UConn legend — and has the national championship ball to prove it - The Athletic",
      description:
        "Sanogo was named the Final Four's Most Outstanding Player after scoring 17 points with 10 rebounds against San Diego State.",
      url: "https://theathletic.com/4379410/2023/04/04/uconn-adama-sanogo-ncaa-championship/",
      urlToImage:
        "https://cdn.theathletic.com/app/uploads/2023/04/04025702/GettyImages-1479587591-1024x683.jpg",
      publishedAt: "2023-04-04T16:18:18Z",
      content:
        "HOUSTON As the next great UConn big man ascended Monday night, bound for a net half-dangling off the NRG Stadiums north rim, Emeka Okafor paused and held out a hand. The kid from Mali who was a socce… [+6919 chars]",
    },
  ],
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }: any) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const mock = { data: mockData };

jest.mock("../../helpers/customHooks", () => ({
  useNews: () => {
    return mock;
  },
  useLatestNews: () => {
    return mock;
  },

  useOnScroll: () => {
    jest.fn();
  },
}));

describe("Main", () => {
  it("should display the loading view", () => {
    // @ts-ignore

    render(<Main />, { wrapper });

    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });
});
