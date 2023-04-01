import React, { ReactNode } from "react";

type MenuItemProps = {
  children: ReactNode;
};

const MenuItem = ({ children }: MenuItemProps) => {
  return <div className="c-menu__item">{children}</div>;
};

export default MenuItem;
