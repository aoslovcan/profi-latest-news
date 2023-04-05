import React from "react";

type SideBarProps = {
  children: React.ReactNode;
};

const SideBar = ({ children }: SideBarProps) => {
  return <div className="sidebar">{children}</div>;
};

export default SideBar;
