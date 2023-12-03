import {Outlet} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";

import {Header} from "../components/header/Header";
import {genresActions} from "../store/slices/GenresSlice";

import css from './MainLayout.module.css'

const MainLayout = () => {
    const theme = useAppSelector(state => state.theme);
    const dispatch = useAppDispatch();
    const hideGenres = (ev: { stopPropagation: () => void }) => {
        ev.stopPropagation();
        const genres:HTMLElement | null= document.getElementById('genres');
        if(genres.classList.length === 2) {
            dispatch(genresActions.toggleHide())
        }
    }

    return (
        <div onClick={hideGenres} className={theme? css.light : css.dark}>
            <Header/>
            <hr/>

            <Outlet/>
        </div>
    );
};

export {MainLayout};