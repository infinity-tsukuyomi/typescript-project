import React from 'react';
import {NavLink} from "react-router-dom";

import css from "../../App.module.css";

const Header = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to={'movies'}>Movies</NavLink>
                <NavLink to={'genres'}>Genres</NavLink>
            </div>
        </div>
    );
};

export default Header;