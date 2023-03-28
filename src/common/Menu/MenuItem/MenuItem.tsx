import React, {ReactNode} from "react";

type MenuItemProps = {
    children: ReactNode
}

const MenuItem = ({children} : MenuItemProps) => {
    return(
        <div className="menu__item">
            {children}
        </div>

    )
}

export default MenuItem