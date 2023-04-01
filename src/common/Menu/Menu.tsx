import React, { ReactNode } from "react";

type MenuProps = {
  children: ReactNode;
};

const Menu = ({ children }: MenuProps) => {
  return <ul className="c-menu">{children}</ul>;
};

export default Menu;
