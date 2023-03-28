import React, {ReactNode} from "react";

type MenuProps = {
    children: ReactNode
}

const Menu = ({children} : MenuProps) => {



    return(
        <div className="menu-container">
            <ul className="menu">
                {children}
            </ul>
        </div>

    )
}

export default Menu