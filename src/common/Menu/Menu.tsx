import React, { ReactNode } from "react";

type MenuProps = {
  id: string;
  children: ReactNode;
};

const Menu = ({ id, children }: MenuProps) => {
  return (
    <ul id={id} data-testid={id} className="c-menu">
      {children}
    </ul>
  );
};

export default Menu;
