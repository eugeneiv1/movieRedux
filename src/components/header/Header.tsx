import React from "react";
import {useNavigate} from "react-router-dom";

import css from './Header.module.css'
const Header = () => {
    const navigate = useNavigate();

    return (
        <div className={css.headerWrapper}>
            <div className={css.Header}>
                <p onClick={() => navigate('../movies')}>The MovieDB</p>
                <ul className={css.headerList}>
                    <li><p onClick={() => navigate('../movies')}>Movies</p></li>
                </ul>
                <div>The MovieDB</div>
            </div>
        </div>
    );
};

export {Header};