import React, {FC, ReactNode} from 'react';
import {NavLink, NavLinkProps, Route, Routes} from "react-router-dom";

interface Props {
    string: React.ReactNode;
    address: number;
}


const MenuItem: FC<Props> = (props) => {
    return (
        <div className="menuItem">
            <NavLink to={"/" + props.string} className = { navData => navData.isActive ? "menu-item_active" : "menu-item" }>{props.string}</NavLink>
        </div>
    );
};

export default MenuItem;

//