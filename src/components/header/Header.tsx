import React from "react";
import {useNavigate} from "react-router-dom";
import {FaRegMoon, FaRegSun} from "react-icons/fa";

import css from './Header.module.css';
import logo from '../../images/logo.png'
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieSliceActions} from "../../store/slices/MovieSlice";
import {Genres} from "../Genres/Genres";
import {genresActions} from "../../store/slices/GenresSlice";
import {themeActions} from "../../store/slices/ThemeSlice";
const Header = () => {
    const {hide} = useAppSelector(state => state.genres);
    const theme = useAppSelector(state => state.theme)
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const goStart = () => {
        dispatch(movieSliceActions.setPage(1));
        dispatch(movieSliceActions.setGenre(null));
        dispatch(movieSliceActions.setSearchValue(null))
        navigate('../movies')
    }
    const toggleHide = () => {
        dispatch(genresActions.toggleHide());
    }

    const toggleTheme = () => {
        dispatch(themeActions.toggleTheme())
    }

    return (
        <div className={css.headerWrapper}>
            <div className={css.Header}>
                <p onClick={goStart}>The MovieDB</p>
                <ul className={css.headerList}>
                    <li><p onClick={goStart}>Movies</p></li>
                    <li><p onClick={toggleHide}>Genres</p></li>
                    <li><p onClick={() => navigate('search')}>Search movie</p></li>
                </ul>
                <div onClick={toggleTheme} className={css.theme}>
                    {theme ? <FaRegSun/> : <FaRegMoon/>}
                </div>
                <div className={css.user}>
                    <p>MostlyAngel</p>
                    <img src={logo} alt="logo" className={css.logo}/>
                </div>
            </div>
            <div className={hide? css.genresWrapper : [css.genresWrapper, css.show].join(' ')} id={'genres'}>
                <Genres />
            </div>
        </div>
    );
};

export {Header};