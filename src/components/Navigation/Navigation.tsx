import React from "react";
import Menu from "../../common/Menu/Menu";
import {NavLink} from "react-router-dom";
import MenuItem from "../../common/Menu/MenuItem/MenuItem";
import Icon from "../../common/Icon/Icon";

const Navigation = () => {

    const navigationItems = [
        {
            label: "Home",
            icon: "Home",
            url: "/news"
        },
        {
            label: "General",
            icon: "News",
            url: "/news/general"
        },
        {
            label: "Business",
            icon: "Briefcase",
            url: "/news/business"
        },
        {
            label: "Health",
            icon: "Health",
            url: "/news/health"
        },
        {
            label: "Science",
            icon: "LabBottle",
            url: "/news/science",
        },
        {
            label: "Sports",
            icon: "Bold",
            url: "/news/sports"
        },
        {
            label: "Technology",
            icon: "TVGuide",
            url: "/news/technology"
        },
    ]

    return(
            <Menu>
                {
                    navigationItems.map(({url, label, icon}) => (
                        <MenuItem>
                            <NavLink to={url} className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""}>
                                <Icon type={icon}/>
                                {label}
                            </NavLink>
                        </MenuItem>
                        )
                    )
                }
            </Menu>
    )
}

export default Navigation