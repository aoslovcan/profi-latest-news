import React from "react";
import "./SideBar.scss";

type SideBarProps = {
  children: React.ReactNode;
};

const SideBar = ({ children }: SideBarProps) => {
  return <div className="sidebar">{children}</div>;
};

export default SideBar;
