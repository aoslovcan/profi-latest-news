import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import SideBar from "./common/SideBar/SideBar";
import Main from "./pages/Main/Main";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import { NewsClient } from "./api/NewsClient/NewsClient";

export const Layout = () => {
  const newsClient = new NewsClient();
  const query = `category=science&country=us`;

  useEffect(() => {
    newsClient.getNews(query).then((res) => console.log(res));
  }, []);

  return (
    <div className="u-lyt" data-testid="layout">
      <Header />
      <div className="o-page">
        <SideBar>
          <Navigation />
        </SideBar>
        <div className="main">
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/news" element={<Main />}></Route>
            <Route path="/news/:category" element={<Main />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};
