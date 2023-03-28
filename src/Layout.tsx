import React from "react";
import Header from "./components/Header/Header";
import SideBar from "./common/SideBar/SideBar";
import Main from "./pages/Main/Main";
import { Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation/Navigation";


export const Layout = () => {
    return (
        <div className="u-lyt" data-testid="layout">
            <Header/>
            <div className="o-page">
                <SideBar>
                   <Navigation/>
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
    )
}